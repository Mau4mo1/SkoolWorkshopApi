import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './routes/indexRoutes';
import { createConnection, getConnectionOptions } from 'typeorm';
import NamingStrategy from './data/NamingStrategy';

const startup = async () => {
    // Get TypeORM config from .json file
    const connectionOptions = await getConnectionOptions();

    // Add custom TypeORM Naming Strategy to config
    Object.assign(connectionOptions, { 
        namingStrategy: new NamingStrategy(), 
        entities: [ 
            path.join(__dirname, '/models/**/*{.ts,.js}')
        ], 
        cli: {
            entitiesDir: path.join(__dirname, '/models')
        }
    });

    // Create connection with config
    await createConnection(connectionOptions);
}

startup();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', router);

console.log('🚀 Starting server!');

export default app;
