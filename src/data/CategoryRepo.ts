import WorkshopCategory from '../models/WorkshopCategory';
import { getRepository } from 'typeorm';
import CrudRepo from './CrudRepo';
import Repo from './Repo';
import Workshop from '../models/Workshop';

export default class CategoryRepo extends Repo implements CrudRepo<WorkshopCategory> {
    async getAll(): Promise<WorkshopCategory[]> {
        return this.execute(() => getRepository(WorkshopCategory).find());
    }

    async getById(id: number): Promise<WorkshopCategory> {
        return this.execute(() => getRepository(WorkshopCategory).findOne(id));
    }

    async create(object: any): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async update(id: number, object: any): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async getByCategory(category: string): Promise<Workshop[]> {
        return this.execute(() => getRepository(Workshop).find({Category: category}));
    }
}
