// import express from 'express';
// import path from 'path';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';
// import router from './routes/indexRoutes';

// const app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api', router);

// export default app;


import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './routes/indexRoutes';
import { createConnection } from 'typeorm';
import WorkshopCategory from './models/WorkshopCategory';
import Registration from './models/Registration';
import Round from './models/Round';
import WorkshopPicture from './models/WorkshopPicture';
import Workshop from './models/Workshop';
import Participant from './models/Participant';

// Test
import WorkshopRepo from './data/WorkshopRepo';

const app = express();
const workshopRepo = new WorkshopRepo();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

// Test
const test = async () => {
    console.log('Get all Workshops: \n', await workshopRepo.getAll());
    console.log('Get one Workshop: \n', await workshopRepo.getById(14));
}

test();

export default app;