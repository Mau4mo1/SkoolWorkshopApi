import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Team {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string;

    @Column()
    CategoryId: Number;
}
