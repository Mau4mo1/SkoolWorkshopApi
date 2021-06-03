export default interface CrudInterface<Type> {
	create(body : Type): Type;

	getById(id : number): Type;

	getAll(): Type;

	update(id : number): Type;

	delete(id : number): Type;
}
