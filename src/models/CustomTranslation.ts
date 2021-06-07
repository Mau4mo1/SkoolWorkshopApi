import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Company {
	@PrimaryGeneratedColumn()
    Id: number;

    @Column()
    ShortDesc: string;

    @Column()
    Culture: string;

    @Column()
    Translation: string;

}
