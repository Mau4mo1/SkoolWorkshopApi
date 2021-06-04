export default interface CrudRepo<T> {
	getAll(): Promise<T[]>;
	getById(id: number): Promise<T>;
	create(object: T): void;
	update(id: number, object: T): void;
	delete(id: number): void;
}
