import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('hotels')
@ApiTags('hotels')
@ApiBearerAuth()
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Post()
  @ApiBody({ type: CreateHotelDto })
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelsService.create(createHotelDto);
  }

  @Get()
  findAll(@Req() req) {
    const params = req?.query;
    return this.hotelsService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelsService.findOne(+id);
  }
}
