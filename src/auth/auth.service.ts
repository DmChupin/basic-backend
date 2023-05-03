import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from '../models/users/users.service';
import { UserEntity } from '../models/users/entities/user.entity';
import { CreateUserDto } from '../models/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user: UserEntity = await this.userService.findByEmail(email);

    if (user && user.password === password) {
      const { password, ...content } = user;
      return content;
    }
    return null;
  }

  async register(createUserDto: CreateUserDto) {
    try {
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
