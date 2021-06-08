import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import Picture from "./Picture";

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

    @ManyToMany(() => Picture, picture => picture.Workshops)
    @JoinTable()
    Pictures: Promise<Picture[]>;
}
