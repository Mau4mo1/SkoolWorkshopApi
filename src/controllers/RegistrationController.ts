import CrudController from './CrudController';
import RegistrationRepo from '../data/RegistrationRepo';
import Controller from './Controller';

const registrationRepo = new RegistrationRepo();

export default class RegistrationController extends Controller implements CrudController {
    async getById(req: any, res: any, next: any): Promise<void> {
		console.log(this);
		super.response(res,await registrationRepo.getById(req.params.registrationId));
    }
    async getAll(req: any, res: any, next: any): Promise<void> {
		console.log(this);
		super.response(res,await registrationRepo.getAll());
    }

	async create(req: Request, res: Response, next: any): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async update(req: Request, res: Response, next: any): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async delete(req: Request, res: Response, next: any): Promise<void> {
        throw new Error('Method not implemented.');
    }
    
}