import { Connection, getConnection } from "typeorm";

export default class Repo {
    async execute(callback: (connection: Connection) => Promise<any>): Promise<any> {
		try {
			return await callback(getConnection());
		} catch (error) {
			console.log(error);
		}
    }
}
