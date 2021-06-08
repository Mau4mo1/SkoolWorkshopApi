import { Request, Response, NextFunction } from 'express';

export default interface CrudController {
	getAll(request: Request, response: Response, next: NextFunction): Promise<void>;
	getById(request: Request, response: Response, next: NextFunction): Promise<void>;
	create(request: Request, response: Response, next: NextFunction): Promise<void>;
	update(request: Request, response: Response, next: NextFunction): Promise<void>;
	delete(request: Request, response: Response, next: NextFunction): Promise<void>;
}
