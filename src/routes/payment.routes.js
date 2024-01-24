import { Router } from 'express';
import { createOrder } from '../controllers/payment.controllers.js';


const router = Router();

/* Rutas */
router.get('/create-order', createOrder);

router.get('/success');

router.get('/webhook');

export default router;