import { Connection, createConnection } from 'typeorm';
import Workshop from '../models/Workshop';
import CrudRepo from './CrudRepo';

export default class WorkshopRepo implements CrudRepo<Workshop> {

	create(body: Workshop): Promise<Workshop[]> {
		throw new Error('Method not implemented.');
	}
	getById(id: number): Promise<Workshop[]> {
		throw new Error('Method not implemented.');
	}
	async getAll(): Promise<Workshop[]> {
		let connection: Connection = await createConnection();
		return connection.getRepository(Workshop).find();
	}
	update(id: number): Promise<Workshop[]> {
		throw new Error('Method not implemented.');
	}
	delete(id: number): Promise<Workshop[]> {
		throw new Error('Method not implemented.');
	}

}
