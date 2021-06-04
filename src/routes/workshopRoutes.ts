import express from 'express';
import WorkshopController from '../controllers/WorkshopController';

const workshopController = new WorkshopController();
const router = express.Router();

// getAll
router.get('/',workshopController.getAll);
// getById
router.get('/:workshopId',workshopController.getById);
// getById voor rounds
router.get('/:workshopId/:workshopRoundId',);

export default router;
