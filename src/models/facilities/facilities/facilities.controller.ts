import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FacilitiesService } from './facilities.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../auth/guards/jwt.guard';

@Controller('facilities')
@ApiTags('facilities')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class FacilitiesController {
  constructor(private readonly facilitiesService: FacilitiesService) {}

  @Post()
  create(@Body() createFacilityDto: CreateFacilityDto) {
    return this.facilitiesService.create(createFacilityDto);
  }

  @Get()
  findAll(@Req() req) {
    const hotelId: number = +req?.query?.hotelId;
    return this.facilitiesService.findAll(hotelId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facilitiesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFacilityDto: UpdateFacilityDto,
  ) {
    return this.facilitiesService.update(+id, updateFacilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facilitiesService.remove(+id);
  }
}
