import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'mail@gmail.com',
  })
  email: string;

  @ApiProperty({
    default: 'Ivan Ivanovich Kruzenshtern',
  })
  fullname: string;

  @ApiProperty({
    default: 'qqqwwwe',
  })
  password: string;
}
