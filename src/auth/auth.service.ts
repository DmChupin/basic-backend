import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from '../models/users/users.service';
import { UserEntity } from '../models/users/entities/user.entity';
import { CreateUserDto } from '../models/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user: UserEntity = await this.userService.findByEmail(email);

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const { password, ...content } = user;
        return content;
      }
      return null;
    }
    return null;
  }

  async register(createUserDto: CreateUserDto) {
    try {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(createUserDto.password, salt);
      createUserDto.password = hashPassword;
      const userData = await this.userService.create(createUserDto);
      return this.jwtService.sign({ id: userData.id });
    } catch (err) {
      console.log(err);
      throw new ForbiddenException('Registration error');
    }
  }

  async login(user: UserEntity) {
    return {
      token: this.jwtService.sign({ id: user.id }),
    };
  }
}
