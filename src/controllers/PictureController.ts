import { Request, Response, NextFunction } from 'express';
import CrudController from './CrudController';
import PictureRepo from '../data/PictureRepo';
import Controller from './Controller';

const pictureRepo = new PictureRepo();

export default class PictureController extends Controller implements CrudController {

    async validation(request: Request, response: Response, next: NextFunction) : Promise<void> {
        
	}

    async getAll(request: Request, response: Response, next: NextFunction): Promise<void> {
        super.respond(response, await pictureRepo.getAll());
    }

    async getById(request: Request, response: Response, next: NextFunction): Promise<void> {
        super.respond(response, await pictureRepo.getById(parseInt(request.params.pictureId)));
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
