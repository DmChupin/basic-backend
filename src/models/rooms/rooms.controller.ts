import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('rooms')
@ApiTags('rooms')
export class RoomsController {
  constructor(
    private readonly roomsService: RoomsService, // private readonly hotelService: HotelsService,
  ) {}

  @Post()
  @ApiBody({ type: CreateRoomDto })
  create(@Body() body) {
    const { hotelId, ...createRoomDto } = body;

    return this.roomsService.create(createRoomDto, hotelId);
  }

  @Get()
  findAll(@Req() req) {
    const params = req?.query;

    return this.roomsService.findAll(params);
  }
}
