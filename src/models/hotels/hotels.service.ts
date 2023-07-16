import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelEntity } from './entities/hotel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(HotelEntity)
    private repository: Repository<HotelEntity>,
  ) {}

  create(createHotelDto: CreateHotelDto) {
    return this.repository.save(createHotelDto);
  }

  findAll(params) {
    return this.repository.find({
      where: params,
      relations: {
        facilities: true,
      },
    });
  }

  findOne(id: number): any {
    //return this.repository.findOneBy({ id });
    return this.repository.find({
      where: { id },
      relations: {
        facilities: true,
      },
    });
  }
}
