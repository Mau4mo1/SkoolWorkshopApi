import WorkshopCategory from '../models/WorkshopCategory';
import { getRepository } from 'typeorm';
import Picture from '../models/Picture';
import CrudRepo from './CrudRepo';
import Repo from './Repo';
import Workshop from '../models/Workshop';

export default class CategoryRepo extends Repo implements CrudRepo<WorkshopCategory> {
    getAll(): Promise<WorkshopCategory[]> {
        return this.execute(() => getRepository(WorkshopCategory).find());
    }
    getById(id: number): Promise<WorkshopCategory> {
        return this.execute(() => getRepository(WorkshopCategory).findOne(id));
    }
    create(object: any): Promise<void> {
        throw new Error('Method not implemented.');
    }
    update(id: number, object: any): Promise<void> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    getWorkshopsByCategory(category: string): Promise<Workshop[]> {
        return this.execute(() => getRepository(Workshop).find({Category: category}));
    }
}
