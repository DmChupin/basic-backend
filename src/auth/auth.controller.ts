import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from '../models/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { UserEntity } from '../models/users/entities/user.entity';
import { LocalAuthGuard } from './guards/local.guards';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: CreateUserDto })
  async login(@Request() req) {
    return this.authService.login(req.user as UserEntity);
  }

  @Post('register')
  @ApiBody({ type: CreateUserDto })
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
}
