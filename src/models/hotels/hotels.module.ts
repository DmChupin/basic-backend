import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelEntity } from './entities/hotel.entity';

@Module({
  controllers: [HotelsController],
  providers: [HotelsService],
  imports: [TypeOrmModule.forFeature([HotelEntity])],
})
export class HotelsModule {}
