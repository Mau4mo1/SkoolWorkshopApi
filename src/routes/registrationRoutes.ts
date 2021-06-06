import express from 'express';
import RegistrationController from '../controllers/RegistrationController'

const registrationController = new RegistrationController();

const router = express.Router();

router.get('/',registrationController.getAll);
router.get('/:registrationId',registrationController.getById);
router.get('/:registrationId/round/:roundId',);
router.get('/:registrationId/round');

export default router;

