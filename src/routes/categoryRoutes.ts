import express from 'express';
import WorkshopCategoryController from '../controllers/WorkshopCategoryController';

const router = express.Router();

const workshopCategoryController = new WorkshopCategoryController();

router.get('/', workshopCategoryController.getAll);
router.get('/workshops', workshopCategoryController.getWorkshopsByCategory);

export default router;
