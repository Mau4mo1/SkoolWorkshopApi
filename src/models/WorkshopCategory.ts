import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()

export default class WorkshopCategory {
    @PrimaryColumn()
    Category: string;
}