import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class PictureRubric {
	@PrimaryGeneratedColumn()
	Id: number;

	@Column()
	ParticipantId: string;

	@Column()
	WorkshopRoundId: string;
}
