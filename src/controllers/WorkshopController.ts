import { Request, Response, NextFunction } from 'express';
import CrudController from './CrudController';
import WorkshopRepo from '../data/WorkshopRepo';
import Controller from './Controller';

const workshopRepo = new WorkshopRepo();

export default class WorkshopController extends Controller implements CrudController {
	async getAll(request: Request, response: Response, next: NextFunction): Promise<void> {
		super.respond(response, await workshopRepo.getAll());
	}
	
	async getById(request: Request, response: Response, next: NextFunction): Promise<void> {
		super.respond(response, await workshopRepo.getById(parseInt(request.params.workshopId)));
	}

	async create(request: Request, response: Response, next: NextFunction): Promise<void> {
		throw new Error('Method not implemented.');
	}

	async update(request: Request, response: Response, next: NextFunction): Promise<void> {
		throw new Error('Method not implemented.');
	}

	async delete(request: Request, response: Response, next: NextFunction): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
