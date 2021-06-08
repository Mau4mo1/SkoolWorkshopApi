import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import TeamWorkshopRound from "./TeamWorkshopRound";

@Entity()
export default class Team {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @OneToMany(() => TeamWorkshopRound, teamWorkshopRound => teamWorkshopRound.Team)
    TeamWorkshopRound: Promise<TeamWorkshopRound>;
}
