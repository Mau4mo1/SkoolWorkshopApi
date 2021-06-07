import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export default class WorkshopPicture {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    WorkshopId: number;

    @Column()
    PictureId: number;

    @Column()
    SortOrder: number;
}
