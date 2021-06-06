import { Connection, createConnection, ConnectionOptions, getConnectionOptions } from "typeorm";
import NamingStrategy from "./NamingStrategy";

export default class Repo {
    async execute(callback: (connection: Connection) => Promise<any>): Promise<any> {
        let connection: Connection;
		let connectionOptions: ConnectionOptions;

		try {
			connectionOptions = await getConnectionOptions();

			Object.assign(connectionOptions, { namingStrategy: new NamingStrategy() });
			
			connection = await createConnection(connectionOptions);

            return await callback(connection);
		} catch (error) {
			console.log(error);
		} finally {
			await connection.close();
		}
    }
}
