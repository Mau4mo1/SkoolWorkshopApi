import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class WorkshopRound {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    SeatsMin: number;

    @Column()
    SeatsMax: number;

    @Column()
    Active: string;

    @Column()
    Instructor: string;

    @Column()
    TeamSpecific: number;

    @Column()
    WorkshopId: number;

    @Column()
    RoundId: number;
}
