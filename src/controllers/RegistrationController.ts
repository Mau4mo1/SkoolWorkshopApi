import Workshop from '../models/Workshop';
import CrudController from './CrudController';
import { Connection, createConnection } from 'typeorm';
import Registration from '../models/Registration';
import RegistrationRepo from '../data/RegistrationRepo';

var logger = require('tracer').console();
// implement the repo from the data
const registrationRepo = new RegistrationRepo();

export default class RegistrationController implements CrudController<Registration> {
    create(req: Request, res: Response, next: any): void {
        throw new Error('Method not implemented.');
    }
    async getById(req: any, res: any, next: any): Promise<void> {
        const result = await registrationRepo.getById(req.params.registrationId);

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
        const result = await registrationRepo.getAll();

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