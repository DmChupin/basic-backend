import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.repository.save(createUserDto);
  }

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.repository.findOneBy({ email });
  }

  async findById(id: number): Promise<UserEntity | undefined> {
    return this.repository.findOneBy({ id });
  }
}
