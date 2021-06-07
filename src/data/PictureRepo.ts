import { getRepository } from 'typeorm';
import Picture from '../models/Picture';
import CrudRepo from './CrudRepo';
import Repo from './Repo';

export default class PictureRepo extends Repo implements CrudRepo<Picture> {
    async getAll(): Promise<Picture[]> {
        return this.execute(() => getRepository(Picture).find());
    }

    async getById(id: number): Promise<Picture> {
        throw new Error('Method not implemented.');
    }

    async create(object: Picture): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async update(id: number, object: Picture): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
