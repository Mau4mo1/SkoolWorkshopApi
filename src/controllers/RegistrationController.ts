import { Request, Response, NextFunction } from 'express';
import CrudController from './CrudController';
import RegistrationRepo from '../data/RegistrationRepo';
import Controller from './Controller';
import Registration from '../models/Registration';

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

	async create(request: Request, response: Response, next: NextFunction): Promise<any> {

		const registration = new Registration();
		registration.Name = request.body.Name;
		registration.SeatsCount = parseInt(request.body.SeatsCount);
		registration.RoundTimeInMin =  parseInt(request.body.RoundTimeInMin);
		registration.RoundCount =  parseInt(request.body.RoundCount);
		registration.RoundMin =  parseInt(request.body.RoundMin);
		registration.RoundMax =  parseInt(request.body.RoundMax);
		registration.StartDate =  request.body.StartDate;
		registration.EndDate =  request.body.EndDate;
		registration.StartDateRegistration =  request.body.StartDateRegistration;
		registration.EndDateRegistration =  request.body.EndDateRegistration;
		registration.EndDateDownload =  request.body.EndDateDownload;
		registration.AccessCode =  request.body.AccessCode;
		registration.Active =  parseInt(request.body.Active);
		registration.ShortDesc =  request.body.ShortDesc;
		registration.CompanyId =  parseInt(request.body.CompanyId);

		super.mutation(response, await registrationRepo.create(registration))
  	}

  	async update(request: Request, response: Response, next: NextFunction): Promise<void> {
    	throw new Error('Method not implemented.');
 	}

  	async delete(request: Request, response: Response, next: NextFunction): Promise<void> {
    	throw new Error('Method not implemented.');
  	}
}
