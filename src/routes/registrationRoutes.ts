import express from 'express';
// import Registration from '../controllers/'

const router = express.Router();

// getAll
router.get('/');
// getById
router.get('/:registrationId');
// get round from a registration by roundId and registrationId
router.get('/:registrationId/round/:roundId');
// get all rounds from registrationId
router.get('/:registrationId/round');

export default router;

