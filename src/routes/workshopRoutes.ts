import express from 'express';
import WorkshopController from '../controllers/WorkshopController';

const workshopController = new WorkshopController();

const router = express.Router();

router.get('/', workshopController.getAll);
router.get('/:workshopId', workshopController.validation, workshopController.getById);
router.get('/:workshopId/:workshopRoundId');
router.get('/:workshopId/pictures', workshopController.getPictures);

export default router;
