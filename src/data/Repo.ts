import { Connection, createConnection } from "typeorm";

export default class Repo {
    async execute(callback: (connection: Connection) => Promise<any>): Promise<any> {
        let connection: Connection;

		try {
			connection = await createConnection();

            return await callback(connection);
		} catch (error) {
			console.log(error);
		} finally {
			await connection.close();
		}
    }
}
