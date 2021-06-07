import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class WorkshopCategory {
    @Column()
    Category: string;

}