import { Connection } from 'typeorm';
import Workshop from '../models/Workshop';
import CrudRepo from './CrudRepo';
import Repo from './Repo';

export default class WorkshopRepo extends Repo implements CrudRepo<Workshop> {
	async getAll(): Promise<Workshop[]> {
		return this.execute((connection: Connection) => connection.getRepository(Workshop).find());
	}

	async getById(id: number): Promise<Workshop> {
		return this.execute((connection: Connection) => connection.getRepository(Workshop).findOne(id));
	}

	async create(object: Workshop): Promise<Workshop[]> {
		throw new Error('Method not implemented.');
	}

	async update(id: number, object: Workshop): Promise<Workshop[]> {
		throw new Error('Method not implemented.');
	}

	async delete(id: number): Promise<Workshop[]> {
		throw new Error('Method not implemented.');
	}
}
