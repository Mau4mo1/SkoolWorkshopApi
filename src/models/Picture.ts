import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm";
import Workshop from "./Workshop";

@Entity()
export default class Picture {
	@PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Rubric: string;

    @Column()
    FileName: string;

    @Column()
    ContentType: string;
    
    @Column()
    Blob: string;

    @Column()
    ThumbNail: string;

    @Column()
    ThumbNailName: string;

    @ManyToMany(() => Workshop, workshop => workshop.Pictures)
    @JoinTable()
    Workshops: Promise<Workshop[]>;
}
