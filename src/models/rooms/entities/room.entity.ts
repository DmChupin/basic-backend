import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HotelEntity } from '../../hotels/entities/hotel.entity';

@Entity('rooms')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  sleeps: number;

  @Column()
  price: number;

  @Column()
  facilities: string;

  @Column()
  freeCount: number;

  @Column()
  bookedCount: number;

  @Column({ nullable: true })
  hotelId: number;

  @ManyToOne(() => HotelEntity, (hotel) => hotel.rooms)
  @JoinColumn()
  hotel: HotelEntity;
}
