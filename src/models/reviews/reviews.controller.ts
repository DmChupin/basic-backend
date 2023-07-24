import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guards/jwt.guard';

@Controller('reviews')
@ApiTags('reviews')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get()
  findAll(@Req() req) {
    const params = req?.query;
    return this.reviewsService.findAll(params);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(+id);
  }
}
