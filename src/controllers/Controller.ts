import { Response } from 'express';

export default class Controller {
    async respond(response: Response, result: any): Promise<void> {
        if (result != undefined) {
			response.status(200).json(result);
		} else {
			response.status(500).json({
				error: 'Iets in de server heeft zijn taak niet juist volbracht, ik ga geen namen noemen'
			});
		}
    }
}
