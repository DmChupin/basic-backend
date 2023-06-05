import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomEntity } from './entities/room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HotelEntity } from '../hotels/entities/hotel.entity';
import { CreateHotelDto } from '../hotels/dto/create-hotel.dto';

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

  findAll() {
    return this.repository.find();
  }
  async findAllByHotelId(id: number) {
    return this.repository.findBy({ hotel: { id } });
  }
  findOne(id: number) {
    return `This action returns a #${id} hotel`;
  }
}
