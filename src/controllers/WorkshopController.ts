import CrudController from './CrudController';
import WorkshopRepo from '../data/WorkshopRepo';
import Controller from './Controller';

const workshopRepo = new WorkshopRepo();

export default class WorkshopController extends Controller implements CrudController {
	async getById(req: any, res: any, next: any): Promise<void> {
		super.response(res,await workshopRepo.getById(req.params.work));
	}

	async getAll(req: any, res: any, next: any): Promise<void> {
		super.response(res,await workshopRepo.getAll());
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
