import Workshop from '../models/Workshop';
import CrudController from './CrudController';
import WorkshopRepo from '../data/WorkshopRepo';

var logger = require("tracer").console()

export default class WorkshopController implements CrudController<Workshop> {

	create(req: Request, res: Response, next: any): void {
		throw new Error('Method not implemented.');
	}
	getById(req: any, res: any, next: any): void {
		throw new Error('Method not implemented.');
	}
	getAll(req: any, res: any, next: any): void {
		throw new Error('Method not implemented.');
	}
	update(req: Request, res: Response, next: any): void {
		throw new Error('Method not implemented.');
	}
	delete(req: Request, res: Response, next: any): void {
		throw new Error('Method not implemented.');
	}
}
