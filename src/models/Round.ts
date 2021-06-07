import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Round {
	@PrimaryGeneratedColumn()
    Id: number;

    @Column()
    CodeName: string;

    @Column()
    Active: number;

    @Column()
    StartTime: string;
    
    @Column()
    EndTime: string;

    @Column()
    RegistrationId: number;
}
