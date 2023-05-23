import { ApiProperty } from '@nestjs/swagger';

export class CreateHotelDto {
  @ApiProperty({
    default: 'Hotel Maria Lux',
  })
  name: string;

  @ApiProperty({
    default: 300,
  })
  price: number;

  @ApiProperty({
    default: 'Middle segment hotel with condition system and pool',
  })
  description: string;

  @ApiProperty({
    default: 4,
  })
  rating: number;

  @ApiProperty({
    default: 4,
  })
  stars: number;

  @ApiProperty({
    default:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/423409280.jpg?k=ccd5431653437cbdff2ab076a61227ad772068a7d2d107bd64ec712b90fa145e&o=&hp=1',
  })
  image: string;
}
