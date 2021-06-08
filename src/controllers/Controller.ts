import { Console } from 'console';
import { Response } from 'express';
import { nextTick } from 'process';
import { consoleTestResultHandler } from 'tslint/lib/test';
import { isNumber } from 'util';

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

	async validateId(response: Response,id: any): Promise<void> {
		try {
			console.log('Trying  validation');

			let num = Number(id);
    		// Don't allow NaN and stuff.
    		if (!Number.isFinite(num)) {
				console.log(num);
				throw new Error("NAN!");
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
