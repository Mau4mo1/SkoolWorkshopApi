import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import Workshop from "./Workshop";

@Entity()
export default class WorkshopPicture {

    @PrimaryGeneratedColumn()
    Id: number;

    @OneToOne(type=> Workshop)
    @JoinColumn()
    workshop: Workshop;

    @Column()
    PictureId: number;

    @Column()
    SortOrder: number;

}