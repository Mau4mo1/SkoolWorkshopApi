
import { Connection, createConnection, getConnection, getConnectionManager } from "typeorm";
import { createEmptyStatement } from "typescript";

export default interface CrudInterface<T> {
	create(body : T): Promise<T[]>;

	getById(id : number): Promise<T[]>;

	getAll(): Promise<T[]>;

	update(id : number): Promise<T[]>;

	delete(id : number): Promise<T[]>;
}
