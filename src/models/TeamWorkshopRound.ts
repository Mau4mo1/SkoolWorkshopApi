import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class TeamWorkshopRound {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    TeamId: number;

    @Column()
    WorkshopRoundId: number;
}
