import express from 'express';
import workshopRouter from './workshopRoutes';
import organisationRouter from './organisationRoutes';
import userRouter from './userRoutes';
import registrationRouter from './registrationRoutes';
import pictureRouter from './pictureRoutes';
import categoryRouter from './categoryRoutes';

const router = express.Router();

router.use('/workshop', workshopRouter);
router.use('/category', categoryRouter);
router.use('/organisation', organisationRouter);
router.use('/user', userRouter);
router.use('/registrations', registrationRouter);
router.use('/picture', pictureRouter);

export default router;
