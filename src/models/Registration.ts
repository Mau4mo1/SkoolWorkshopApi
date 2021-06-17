import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Registration {
	@PrimaryGeneratedColumn()
    Id: number;

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
    StartDate: Date;

    @Column()
    EndDate: Date;

    @Column()
    StartDateRegistration: Date;

    @Column()
    EndDateRegistration: Date;

    @Column()
    EndDateDownload: Date;

    @Column()
    AccessCode: string;

    @Column()
    Active: number;

    @Column()
    ShortDesc: string;

    @Column()
    CompanyId: number;
}
