export default interface CrudController<Type> {
	create(req: Request, res: Response, next: any): void;

	getById(req: Request, res: Response, next: any): void;

	getAll(req: Request, res: Response, next: any): void;

	update(req: Request, res: Response, next: any): void;

	delete(req: Request, res: Response, next: any): void;
}
