import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import TeamWorkshopRound from "./TeamWorkshopRound";

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

    @OneToMany(() => TeamWorkshopRound, teamWorkshopRound => teamWorkshopRound.WorkshopRound)
    TeamWorkshopRounds: Promise<TeamWorkshopRound[]>
}
