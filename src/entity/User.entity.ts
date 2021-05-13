import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinTable} from "typeorm";
import { Category } from "./Category";

@Entity({ name: "users" })
export class User extends BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ type: "varchar", length: 30 })
  firstName: string;

  @Column({ type: "varchar", length: 30 })
  lastName: string;

  @Column({ type: "varchar", length: 30 })
  email: string;

  @Column({ type: "varchar", length: 250 })
  password: string;

  @Column({ nullable: true })
  salt: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  photoDownloadUrl: string;
  
  @Column({ nullable: true })
  photoFilePath: string;

  @Column({ nullable: true })
  createdDate: Date;

  @Column({ nullable: true })
  updatedDate: Date;

  @Column({ nullable: true })
  token: string;

  @OneToMany(type => Category, category => category.createdBy, {
    cascade: true
  })
  categories0: Category[];

  @OneToMany(type => Category, category => category.updatedBy, {
    cascade: true
  })
  categories1: Category[];

}
