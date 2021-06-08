import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Team from "./Team";
import WorkshopRound from "./WorkshopRound";

@Entity()
export default class TeamWorkshopRound {
    @PrimaryGeneratedColumn()
    Id: number;

    @ManyToOne(() => Team, team => team.TeamWorkshopRound)
    Team: Promise<Team[]>;

    @Column()
    WorkshopRoundId: number;

    @ManyToOne(() => WorkshopRound, workshopRound => workshopRound.TeamWorkshopRounds)
    WorkshopRound: Promise<WorkshopRound>;
}
