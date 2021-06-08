import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class PictureRubric {
	@PrimaryColumn()
	Rubric: string;
}
