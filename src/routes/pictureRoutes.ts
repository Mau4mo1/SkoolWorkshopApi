import express from 'express';
import PictureController from '../controllers/PictureController';

const pictureController = new PictureController();

const router = express.Router();

router.get('/', pictureController.getAll);
router.get('/:pictureId', pictureController.getById);

export default router;
