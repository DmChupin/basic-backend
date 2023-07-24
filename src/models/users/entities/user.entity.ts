import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReviewEntity } from '../../reviews/entities/review.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  male: string;

  @Column({ nullable: true })
  dateOfBirth: string;

  @Column({ nullable: true })
  notifications: boolean;

  @OneToMany(() => ReviewEntity, (review) => review.user)
  reviews: ReviewEntity[];
}
