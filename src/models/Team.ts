import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class WorkshopCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    CategoryId: Number;

}