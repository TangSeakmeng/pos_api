import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

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

}
