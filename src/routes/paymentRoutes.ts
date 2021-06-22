import express from 'express';
import PaymentController from '../controllers/PaymentController';

const router = express.Router();
const paymentController = new PaymentController();

router.get('/');
router.post('/', paymentController.getById);
router.post('/create', paymentController.create);

export default router;
