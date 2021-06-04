import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Workshop {

	@PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Category: string;

    @Column()
    CodeName: string;

    @Column()
    ShortDesc: string;
    
    @Column()
    NeedsApp: string;
}