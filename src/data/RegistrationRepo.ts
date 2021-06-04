import { Connection } from 'typeorm';
import Registration from '../models/Registration';
import CrudRepo from './CrudRepo';
import Repo from './Repo';

export default class RegistrationRepo extends Repo implements CrudRepo<Registration> {
    getAll(): Promise<Registration[]> {
        return this.execute((connection: Connection) => connection.getRepository(Registration).find());
    }
    getById(id: number): Promise<Registration> {
        return this.execute((connection: Connection) => connection.getRepository(Registration).findOne(id));
    }
    create(object: Registration): void {
        throw new Error('Method not implemented.');
    }
    update(id: number, object: Registration): void {
        throw new Error('Method not implemented.');
    }
    delete(id: number): void {
        throw new Error('Method not implemented.');
    }

}