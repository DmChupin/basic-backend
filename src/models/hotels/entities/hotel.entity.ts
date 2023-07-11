import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoomEntity } from '../../rooms/entities/room.entity';
import { ReviewEntity } from '../../reviews/entities/review.entity';

@Entity('hotels')
export class HotelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  rating: number;

  @Column()
  stars: number;

  @Column()
  image: string;

  @OneToMany(() => RoomEntity, (rooms) => rooms.hotel)
  rooms: RoomEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.hotel)
  reviews: ReviewEntity[];
}
