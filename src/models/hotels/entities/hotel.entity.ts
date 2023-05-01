import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoomEntity } from '../../rooms/entities/room.entity';

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
  square: number;

  @OneToMany(() => RoomEntity, (rooms) => rooms.hotel)
  rooms: RoomEntity[];
}
