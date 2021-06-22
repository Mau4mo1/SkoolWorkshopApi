import express from 'express';
import WorkshopController from '../controllers/WorkshopController';

const workshopController = new WorkshopController();

const router = express.Router();

router.get('/', workshopController.getAll);
router.get('/popular', workshopController.getPopular);
router.get('/:workshopId', workshopController.validation, workshopController.getById);
router.get('/:workshopId/:workshopRoundId');
router.get('/:workshopId/pictures', workshopController.getPictures);
router.get('/:workshopId/translations', workshopController.getTranslations);

export default router;
