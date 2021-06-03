import Workshop from '../models/Workshop';
import CrudController from './CrudController';
import WorkshopRepo from '../data/WorkshopRepo';
import { Connection, createConnection } from 'typeorm';

var logger = require('tracer').console();

export default class WorkshopController implements CrudController<Workshop> {
	create(req: Request, res: Response, next: any): void {
		throw new Error('Method not implemented.');
	}
	getById(req: any, res: any, next: any): void {
		createConnection()
			.then(async (connection) => {
				console.log(req.params.workshopId);

				let workshop = await connection.getRepository(Workshop).findOne(req.params.workshopId)
				await connection.close();
				console.log(workshop);
				
				res.status(200).json({
					result: workshop,
				});
			})
			.catch((error) => console.log(error));
	}
	
	getAll(req: any, res: any, next: any): void {
		createConnection()
		.then(async (connection) => {

			let workshops = await connection.manager.find(Workshop);
			await connection.close();
			res.status(200).json({
				result: workshops,
			});
		})
		.catch((error) => console.log(error));
	}

	update(req: Request, res: Response, next: any): void {
		throw new Error('Method not implemented.');
	}
	delete(req: Request, res: Response, next: any): void {
		throw new Error('Method not implemented.');
	}
}
