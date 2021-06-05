import { Connection } from 'typeorm';
import Picture from '../models/Picture';
import CrudRepo from './CrudRepo';
import Repo from './Repo';

export default class PictureRepo extends Repo implements CrudRepo<Picture> {
    getAll(): Promise<Picture[]> {
        return this.execute((connection: Connection) => connection.getRepository(Picture).find());
    }
    getById(id: number): Promise<Picture> {
        throw new Error('Method not implemented.');
    }
    create(object: Picture): void {
        throw new Error('Method not implemented.');
    }
    update(id: number, object: Picture): void {
        throw new Error('Method not implemented.');
    }
    delete(id: number): void {
        throw new Error('Method not implemented.');
    }

}