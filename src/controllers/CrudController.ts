export default interface CrudController {
	getAll(req: Request, res: Response, next: any): Promise<void>;
	getById(req: Request, res: Response, next: any): Promise<void>;
	create(req: Request, res: Response, next: any): Promise<void>;
	update(req: Request, res: Response, next: any): Promise<void>;
	delete(req: Request, res: Response, next: any): Promise<void>;
}
