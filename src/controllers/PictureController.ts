import Picture from '../models/Picture';
import CrudController from './CrudController';
import { Connection, createConnection } from 'typeorm';
import PictureRepo from '../data/PictureRepo';
//import RegistrationRepo from '../data/RegistrationRepo';

var logger = require('tracer').console();
// implement the repo from the data
const pictureRepo = new PictureRepo();

export default class PictureController implements CrudController<Picture> {
    create(req: Request, res: Response, next: any): void {
        throw new Error('Method not implemented.');
    }
    getById(req: Request, res: Response, next: any): void {
        throw new Error('Method not implemented.');
    }
    async getAll(req: any, res: any, next: any): Promise<void> {
        const result = await pictureRepo.getAll();

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
