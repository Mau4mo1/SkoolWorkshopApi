import Workshop from '../models/Workshop';
import CrudRepo from './CrudRepo';

export default class WorkshopRepo implements CrudRepo<Workshop> {
	create(body: Workshop): Workshop {
		throw new Error('Method not implemented.');
	}
	getById(id: number): Workshop {
		return new Workshop();
	}
	getAll(): Workshop {
		return new Workshop();
	}
	update(id: number): Workshop {
		throw new Error('Method not implemented.');
	}
	delete(id: number): Workshop {
		throw new Error('Method not implemented.');
	}
	
}
