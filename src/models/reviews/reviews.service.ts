import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewEntity } from './entities/review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(ReviewEntity)
    private repository: Repository<ReviewEntity>,
  ) {}

  create(createReviewDto: CreateReviewDto) {
    return this.repository.save(createReviewDto);
  }

  findAll(params: CreateReviewDto) {
    console.log('params: ', params);
    return this.repository.findBy(params);
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
