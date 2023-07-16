import { Module } from '@nestjs/common';
import { FacilitiesService } from './facilities.service';
import { FacilitiesController } from './facilities.controller';
import { FacilityEntity } from './entities/facility.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [FacilitiesController],
  providers: [FacilitiesService],
  imports: [TypeOrmModule.forFeature([FacilityEntity])],
})
export class FacilitiesModule {}
