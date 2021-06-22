import { Request, Response, NextFunction } from 'express';
import CrudController from './CrudController';
import WorkshopRepo from '../data/WorkshopRepo';
import Controller from './Controller';

const workshopRepo = new WorkshopRepo();

export default class WorkshopController extends Controller implements CrudController {

	validation(request: Request, response: Response, next: NextFunction) : void {
		super.validateId(response,request.params.workshopId);
		next();
	}

	async getAll(request: Request, response: Response, next: NextFunction): Promise<void> {
		super.respond(response, await workshopRepo.getAll());
	}
	
	async getById(request: Request, response: Response, next: NextFunction): Promise<void> {
		console.log('getById in controller called');
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

	async getPictures(request: Request, response: Response, next: NextFunction): Promise<void> {
		let workshop = await workshopRepo.getById(parseInt(request.params.workshopId));
		super.respond(response, await workshop.Pictures);
	}

	async getTranslations(request: Request, response: Response, next: NextFunction): Promise<void> {
		super.respond(response,await workshopRepo.getTranslation(parseInt(request.params.workshopId)))
	}

	async getPopular(request: Request, response: Response, next: NextFunction): Promise<void> {
		super.respond(response, await workshopRepo.getPopular());
	}
}
