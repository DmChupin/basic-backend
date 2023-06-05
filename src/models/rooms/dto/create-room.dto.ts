import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
  @ApiProperty({
    default: 'Double room',
  })
  type: string;

  @ApiProperty({
    default: 2,
  })
  sleeps: number;

  @ApiProperty({
    default: 1000,
  })
  price: number;

  @ApiProperty({
    default: 'Condition, Refrigirator, Bathroom',
  })
  facilities: string;

  @ApiProperty({
    default: 2,
  })
  freeCount: number;

  @ApiProperty({
    default: 3,
  })
  bookedCount: number;
}
