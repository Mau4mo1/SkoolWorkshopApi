import { Request, Response, NextFunction } from 'express';
import CrudController from './CrudController';
import RegistrationRepo from '../data/RegistrationRepo';
import Controller from './Controller';

const registrationRepo = new RegistrationRepo();

export default class RegistrationController extends Controller implements CrudController {
	async validation(request: Request, response: Response, next: NextFunction) : Promise<void> {

	}
  	async getAll(request: Request, response: Response, next: NextFunction): Promise<void> {
    	super.respond(response, await registrationRepo.getAll());
  	}

  	async getById(request: Request, response: Response, next: NextFunction): Promise<void> {
    	super.respond(response, await registrationRepo.getById(parseInt(request.params.registrationId)));
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