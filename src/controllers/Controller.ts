import { Response } from 'express';

export default class Controller {
    async respond(response: Response, result: any): Promise<void> {
		console.log(result);
        if (result != undefined) {
			response.status(200).json({result});
		} else {
			response.status(500).json({
				error: 'Iets in de server heeft zijn taak niet juist volbracht, ik ga geen namen noemen'
			});
		}
    }

	async mutation(response: Response,temp: any): Promise<void>{
		response.status(200).json({
			message: "Succes :)"
		});
	}

	validateId(response: Response,id: any): void {
		try {
			console.log('Trying  validation');

			let num = Number(id);
    		// Don't allow NaN and stuff.
    		if (!Number.isFinite(num)) {
				console.log(num);
				throw new Error("NaN!");
			}
		} catch (error) {
			console.log('Failing validation');
			// if the id is a string
			response.status(400).json({
				error: 'Doe ff normale input joh'
			});
		}
		return;
	}
	
}
