import Workshop from '../models/Workshop';
import CrudController from './CrudController';
import WorkshopRepo from '../data/WorkshopRepo';
import { Connection, createConnection } from 'typeorm';
import Controller from './Controller';

var logger = require('tracer').console();
const workshopRepo = new WorkshopRepo();
export default class WorkshopController extends Controller implements CrudController<Workshop> {
	create(req: Request, res: Response, next: any): void {
		throw new Error('Method not implemented.');
	}
	async getById(req: any, res: any, next: any): Promise<void> {
		super.response(res,await workshopRepo.getById(req.params.work));
	}

	async getAll(req: any, res: any, next: any): Promise<void> {
		super.response(res,await workshopRepo.getAll());
	}

	update(req: Request, res: Response, next: any): void {
		throw new Error('Method not implemented.');
	}
	delete(req: Request, res: Response, next: any): void {
		throw new Error('Method not implemented.');
	}
}
