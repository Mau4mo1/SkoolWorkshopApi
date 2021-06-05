import express from 'express';
import PictureController from '../controllers/PictureController';

const pictureController = new PictureController();

const router = express.Router();
// get one picture
router.get('/:id');
// get all pictures
router.get('/',pictureController.getAll);

export default router;
