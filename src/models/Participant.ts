import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Participant {

	@PrimaryGeneratedColumn()
    Id: number;

    @Column()
    UId: string;

    @Column()
    FirstName: string;

    @Column()
    LastName: string;
    
    @Column()
    EMail: string;

    @Column()
    TeamId: number;
}