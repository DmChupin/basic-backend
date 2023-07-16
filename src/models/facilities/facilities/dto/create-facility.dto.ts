import { ApiProperty } from '@nestjs/swagger';

export class CreateFacilityDto {
  @ApiProperty({
    default: 'facilities',
  })
  name: string;

  @ApiProperty({
    default: 'facility description',
  })
  description: string;

  @ApiProperty({})
  image: string;
}
