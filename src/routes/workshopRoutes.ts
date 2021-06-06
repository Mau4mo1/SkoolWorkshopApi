import express from 'express';
import WorkshopController from '../controllers/WorkshopController';

const workshopController = new WorkshopController();

const router = express.Router();

router.get('/',workshopController.getAll);
router.get('/:workshopId',workshopController.getById);
router.get('/:workshopId/:workshopRoundId',);

export default router;
