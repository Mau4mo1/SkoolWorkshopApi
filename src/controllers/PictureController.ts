import CrudController from './CrudController';
import PictureRepo from '../data/PictureRepo';

const pictureRepo = new PictureRepo();

export default class PictureController implements CrudController {
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

    async getById(req: Request, res: Response, next: any): Promise<void> {
        throw new Error('Method not implemented.');
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
