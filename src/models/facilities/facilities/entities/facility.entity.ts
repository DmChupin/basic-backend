import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
