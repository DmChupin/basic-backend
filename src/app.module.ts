import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelsModule } from './models/hotels/hotels.module';
import { HotelEntity } from './models/hotels/entities/hotel.entity';
import { RoomEntity } from './models/rooms/entities/room.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HotelsModule,
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
      entities: [HotelEntity, RoomEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
