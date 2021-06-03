import express from 'express';

const router = express.Router();
// get one picture
router.get('/:id');
// get all pictures
router.get('/');

export default router;
