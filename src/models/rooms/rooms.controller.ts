import { Controller, Get, Post, Body, Req, UseGuards } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';

@Controller('rooms')
@ApiTags('rooms')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
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
