import Workshop from '../models/Workshop';
import CrudController from './CrudController';
import { Connection, createConnection } from 'typeorm';
import Registration from '../models/Registration';
import RegistrationRepo from '../data/RegistrationRepo';
import Controller from './Controller';

var logger = require('tracer').console();
// implement the repo from the data
const registrationRepo = new RegistrationRepo();

export default class RegistrationController extends Controller implements CrudController<Registration> {
    create(req: Request, res: Response, next: any): void {
        throw new Error('Method not implemented.');
    }
    async getById(req: any, res: any, next: any): Promise<void> {
		console.log(this);
		super.response(res,await registrationRepo.getById(req.params.registrationId));
    }
    async getAll(req: any, res: any, next: any): Promise<void> {
		console.log(this);
		super.response(res,await registrationRepo.getAll());
    }
    update(req: Request, res: Response, next: any): void {
        throw new Error('Method not implemented.');
    }
    delete(req: Request, res: Response, next: any): void {
        throw new Error('Method not implemented.');
    }
    
}