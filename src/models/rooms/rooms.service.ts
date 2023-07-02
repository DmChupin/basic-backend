import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomEntity } from './entities/room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomEntity)
    private repository: Repository<RoomEntity>,
  ) {}

  create(createRoomDto: CreateRoomDto, hotelId: number) {
    return this.repository.save({
      ...createRoomDto,
      hotel: {
        id: hotelId,
      },
    });
  }

  findAll(params: CreateRoomDto) {
    return this.repository.findBy(params);
  }
  findOne(id: number) {
    return `This action returns a #${id} hotel`;
  }
}
