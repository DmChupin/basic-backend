import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'mail@gmail.com',
  })
  email: string;

  @ApiProperty({
    default: 'name',
  })
  name: string;

  @ApiProperty({
    default: 'name',
  })
  surname: string;

  @ApiProperty({
    default: 'qqqwwwe',
  })
  male: string;

  @ApiProperty({
    default: 'qqqwwwe',
  })
  dateOfBirth: string;

  @ApiProperty({
    default: false,
  })
  notifications: boolean;

  @ApiProperty({
    default: 'paswd',
  })
  password: string;
}
