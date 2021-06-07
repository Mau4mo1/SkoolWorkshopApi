import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class ParticipantWorkshopRound {
	@PrimaryGeneratedColumn()
	Rubric: string;
}
