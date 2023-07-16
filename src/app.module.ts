import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelsModule } from './models/hotels/hotels.module';
import { HotelEntity } from './models/hotels/entities/hotel.entity';
import { RoomEntity } from './models/rooms/entities/room.entity';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './models/users/entities/user.entity';
import { UsersModule } from './models/users/users.module';
import { AuthModule } from './auth/auth.module';
import { RoomsModule } from './models/rooms/rooms.module';
import { ReviewEntity } from './models/reviews/entities/review.entity';
import { ReviewsModule } from './models/reviews/reviews.module';
import { FacilitiesModule } from './models/facilities/facilities/facilities.module';
import { FacilityEntity } from './models/facilities/facilities/entities/facility.entity';

@Module({
  imports: [
    HotelsModule,
    UsersModule,
    RoomsModule,
    ReviewsModule,
    FacilitiesModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        HotelEntity,
        RoomEntity,
        UserEntity,
        ReviewEntity,
        FacilityEntity,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
