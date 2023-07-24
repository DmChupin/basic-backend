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

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  sleeps: number;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  facilities: string;

  @Column({ nullable: true })
  freeCount: number;

  @Column({ nullable: true })
  bookedCount: number;

  @Column({ nullable: true })
  hotelId: number;

  @ManyToOne(() => HotelEntity, (hotel) => hotel.rooms)
  @JoinColumn()
  hotel: HotelEntity;
}
