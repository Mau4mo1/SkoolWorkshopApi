import { Connection, createConnection, getConnection, getConnectionOptions } from "typeorm";
import NamingStrategy from "./NamingStrategy";

export default class Repo {
	static async connect() {
		let connectionOptions = await getConnectionOptions();
		Object.assign(connectionOptions, { namingStrategy: new NamingStrategy() });
	
		await createConnection(connectionOptions);
	}

    async execute(callback: (connection: Connection) => Promise<any>): Promise<any> {
		try {
			return await callback(getConnection());
		} catch (error) {
			console.log(error);
		}
    }
}
