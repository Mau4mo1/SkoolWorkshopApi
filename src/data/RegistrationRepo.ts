import { getRepository } from 'typeorm';
import Registration from '../models/Registration';
import CrudRepo from './CrudRepo';
import Repo from './Repo';

export default class RegistrationRepo extends Repo implements CrudRepo<Registration> {
    async getAll(): Promise<Registration[]> {
        return this.execute(() => getRepository(Registration).find());
    }

    async getById(id: number): Promise<Registration> {
        return this.execute(() => getRepository(Registration).findOne(id));
    }

    async create(object: Registration): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async update(id: number, object: Registration): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
