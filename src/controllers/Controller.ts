export default class Controller{

    response(res: any, result: any) : any{
        if (result != undefined) {
			res.status(200).json({
				result: result,
			});
		} else {
			res.status(500).json({
				result: 'Iets in de server heeft zijn taak niet juist volbracht, ik ga geen namen noemen',
			});
		}
    }
}