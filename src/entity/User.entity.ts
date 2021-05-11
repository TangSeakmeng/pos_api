import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({ name: "users" })
export class User extends BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  id?: number;

  @Column({ type: "varchar", length: 30 })
  firstName: string;

  @Column({ type: "varchar", length: 30 })
  lastName: string;

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

}
