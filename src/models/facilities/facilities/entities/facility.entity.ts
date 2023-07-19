import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HotelEntity } from '../../../hotels/entities/hotel.entity';

@Entity('facilities')
export class FacilityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @ManyToMany(() => HotelEntity)
  @JoinTable()
  hotels: HotelEntity[];
}
