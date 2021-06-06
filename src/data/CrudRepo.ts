export default interface CrudRepo<T> {
	getAll(): Promise<T[]>;
	getById(id: number): Promise<T>;
	create(object: T): Promise<void>;
	update(id: number, object: T): Promise<void>;
	delete(id: number): Promise<void>;
}
