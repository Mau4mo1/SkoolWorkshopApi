import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Registration {
	@PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    SeatsCount: number;

    @Column()
    RoundCount: number;
    
    @Column()
    RoundTimeInMin: number;

    @Column()
    RoundMin: number;

    @Column()
    RoundMax: number;

    @Column()
    StartDate: string;

    @Column()
    EndDate: string;

    @Column()
    StartDateRegistration: string;

    @Column()
    EndDateDownload: string;

    @Column()
    AccessCode: string;

    @Column()
    Active: number;

    @Column()
    ShortDesc: string;

    @Column()
    CompanyId: number;
}
