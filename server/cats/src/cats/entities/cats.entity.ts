/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cat_name: string;

  @Column()
  cat_age: number;

  @Column()
  cat_breed: string;
}
