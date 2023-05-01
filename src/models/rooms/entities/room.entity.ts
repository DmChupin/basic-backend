import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { HotelEntity } from '../../hotels/entities/hotel.entity';

@Entity('rooms')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomNumber: string;

  @Column()
  roomClass: string;

  @ManyToOne(() => HotelEntity, (hotel) => hotel.name)
  hotel: HotelEntity;
}
