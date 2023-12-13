import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  user_name: string;

  @Column()
  user_email: string;

  @Column()
  user_password: string;
}