import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './routes/indexRoutes';
import { createConnection, getConnectionOptions } from 'typeorm';
import NamingStrategy from './data/NamingStrategy';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

const connect = async () => {
    // Get TypeORM config from .json file
    let connectionOptions = await getConnectionOptions();

    // Add custom TypeORM Naming Strategy to config
    Object.assign(connectionOptions, { namingStrategy: new NamingStrategy() });

    // Create connection with config
    await createConnection(connectionOptions);
}

const startup = async () => {
    console.log('🚀 Starting server!');
    await connect();
}

startup();

export default app;
