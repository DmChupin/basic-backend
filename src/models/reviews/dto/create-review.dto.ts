import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({
    default: 1,
  })
  userId: number;

  @ApiProperty({
    default: 1,
  })
  hotelId: number;

  @ApiProperty({
    default: 1,
  })
  rating: number;

  @ApiProperty({
    default: 'Basic review',
  })
  text: string;
}
