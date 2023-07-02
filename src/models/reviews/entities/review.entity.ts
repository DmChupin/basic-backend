import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HotelEntity } from '../../hotels/entities/hotel.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity('reviews')
export class ReviewEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  rating: number;

  @Column({ nullable: true })
  hotelId: number;

  @Column({ nullable: true })
  userId: number;

  @ManyToOne(() => HotelEntity, (hotel) => hotel.reviews)
  @JoinColumn()
  hotel: HotelEntity;

  @ManyToOne(() => UserEntity, (user) => user.reviews)
  @JoinColumn()
  user: UserEntity;
}
