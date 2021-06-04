import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export default class WorkshopRound {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Seatsmin: number;

    @Column()
    Seatsmax: number;

    @Column()
    Active: number;

    @Column()
    Instructor: string;

    @Column()
    WorkshopId: number;

    @Column()
    RoundId: number;
}