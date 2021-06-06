import express from 'express';

const router = express.Router();

router.get('/');
router.get('/:companyId');
router.get('/:companyId/team/:teamId');
router.get('/:companyId/team');

export default router;
