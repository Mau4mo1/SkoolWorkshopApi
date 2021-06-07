import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Company {
	@PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @Column()
    PictureId: number;

}
