import { Injectable } from '@nestjs/common';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { FacilityEntity } from './entities/facility.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FacilitiesService {
  constructor(
    @InjectRepository(FacilityEntity)
    private repository: Repository<FacilityEntity>,
  ) {}

  create(createFacilityDto: CreateFacilityDto) {
    return this.repository.save(createFacilityDto);
  }

  findAll(hotelId: number) {
    return this.repository
      .createQueryBuilder('f')
      .leftJoin('f.hotels', 'h')
      .where('h.id = :hId', { hId: hotelId })
      .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} facility`;
  }

  update(id: number, updateFacilityDto: UpdateFacilityDto) {
    return `This action updates a #${id} facility`;
  }

  remove(id: number) {
    return `This action removes a #${id} facility`;
  }
}
