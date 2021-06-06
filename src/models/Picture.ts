import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
