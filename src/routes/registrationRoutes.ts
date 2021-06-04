import express from 'express';
import RegistrationController from '../controllers/RegistrationController'

const router = express.Router();
const registrationController = new RegistrationController();
// getAll
router.get('/',registrationController.getAll);
// getById
router.get('/:registrationId',registrationController.getById);
// get round from a registration by roundId and registrationId
router.get('/:registrationId/round/:roundId',);
// get all rounds from registrationId
router.get('/:registrationId/round');

export default router;

