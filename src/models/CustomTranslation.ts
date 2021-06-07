import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class CustomTranslation {
	@PrimaryGeneratedColumn()
    Id: number;

    @Column()
    ShortDesc: string;

    @Column()
    Culture: string;

    @Column()
    Translation: string;
}
