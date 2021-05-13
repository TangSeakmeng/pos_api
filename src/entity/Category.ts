import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn, ManyToOne, JoinColumn, JoinTable} from "typeorm";
import { User } from "./User.entity";

@Entity({ name: "categories" })
export class Category extends BaseEntity {

  @PrimaryColumn("uuid")
  id?: string;

  @Column({ type: "varchar", length: 30 })
  name: string;

  @Column({ nullable: true })
  imageDownloadUrl: string;
  
  @Column({ nullable: true })
  imageFilePath: string;

  @Column({ nullable: true })
  createdDate: Date;

  @Column({ nullable: true })
  updatedDate: Date;

  @ManyToOne(type => User, user => user.categories0)
  @JoinColumn([
    { name: 'createdBy' },
  ])
  createdBy: User;

  @ManyToOne(type => User, user => user.categories1)
  @JoinColumn([
    { name: 'updatedBy' },
  ])
  updatedBy: User;
}
