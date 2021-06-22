import CustomTranslation from '../models/CustomTranslation';
import { getRepository } from 'typeorm';
import Workshop from '../models/Workshop';
import CrudRepo from './CrudRepo';
import Repo from './Repo';

export default class WorkshopRepo extends Repo implements CrudRepo<Workshop> {
	// TODO:: Fix, 🍕
	async getAll(): Promise<Workshop[]> {
		return this.execute(() => getRepository(Workshop).find());
	}

	async getById(id: number): Promise<Workshop> {
		return this.execute(() => getRepository(Workshop).findOne(id));
	}

	async create(object: Workshop): Promise<void> {
		throw new Error('Method not implemented.');
	}

	async update(id: number, object: Workshop): Promise<void> {
		throw new Error('Method not implemented.');
	}

	async delete(id: number): Promise<void> {
		throw new Error('Method not implemented.');
	}

	async getTranslation(id: number): Promise<void>{
		return this.execute(() => getRepository(CustomTranslation)
		.query("SELECT Translation, Culture "+
		" FROM Workshop" + 
		" INNER JOIN CustomTranslation "+
		" ON CustomTranslation.ShortDesc = Workshop.ShortDesc "+
		" WHERE Workshop.Id = " + id));
	}

	async getPopular(): Promise<Workshop[]> {
		const workshops = this.execute(() => getRepository(Workshop)
			.query(
				`SELECT Workshop.Id
				FROM WorkshopRound 
				INNER JOIN Workshop 
				ON Workshop.Id = WorkshopRound.WorkshopId 
				GROUP BY Workshop.Id
				ORDER BY COUNT(WorkshopRound.Id) DESC`
			)
		);

		const results: Workshop[] = [];

		for(let workshop of await workshops) {
			results.push(await this.getById(workshop.Id));
		}

		return results;
	}
}
