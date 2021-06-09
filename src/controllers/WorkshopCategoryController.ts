import { Request, Response, NextFunction } from 'express';
import CrudController from './CrudController';
import Controller from './Controller';
import CategoryRepo from '../data/CategoryRepo';

const categoryRepo = new CategoryRepo();

export default class WorkshopCategoryController extends Controller implements CrudController {
    async validation(request: Request, response: Response, next: NextFunction) : Promise<void> {

	}
  	async getAll(request: Request, response: Response, next: NextFunction): Promise<void> {
    	super.respond(response, await categoryRepo.getAll());
  	}

  	async getById(request: Request, response: Response, next: NextFunction): Promise<void> {
    	super.respond(response, await categoryRepo.getById(parseInt(request.params.registrationId)));
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
    
    async getWorkshopsByCategory(request: Request, response: Response, next: NextFunction): Promise<void> {
        
        super.respond(response, await categoryRepo.getWorkshopsByCategory(request.query.category.toString()));
  	}

}