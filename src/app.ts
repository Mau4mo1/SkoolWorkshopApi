import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './routes/indexRoutes';
import { createConnection, getConnectionOptions, getRepository } from 'typeorm';
import NamingStrategy from './data/NamingStrategy';
import Team from './models/Team';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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

    app.use('/api/v1', router);
}

startup();

export default app;
