import Workshop from '../models/Workshop';
import CrudController from './CrudController';
import WorkshopRepo from '../data/WorkshopRepo';
import { Connection, createConnection } from 'typeorm';

var logger = require('tracer').console();
const workshopRepo = new WorkshopRepo();
export default class WorkshopController implements CrudController<Workshop> {
	create(req: Request, res: Response, next: any): void {
		throw new Error('Method not implemented.');
	}
	async getById(req: any, res: any, next: any): Promise<void> {
		const result = await workshopRepo.getById(req.params.work);

		if (result != undefined) {
			res.status(200).json({
				result: result,
			});
		} else {
			res.status(500).json({
				result: 'Nothing found',
			});
		}
	}

	async getAll(req: any, res: any, next: any): Promise<void> {
		const result = await workshopRepo.getAll();

		if (result != undefined) {
			res.status(200).json({
				result: result,
			});
		} else {
			res.status(500).json({
				result: 'Nothing found',
			});
		}
	}

	update(req: Request, res: Response, next: any): void {
		throw new Error('Method not implemented.');
	}
	delete(req: Request, res: Response, next: any): void {
		throw new Error('Method not implemented.');
	}
}
