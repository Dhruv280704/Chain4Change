import express from 'express';
import { createPlisioInvoice } from '../controllers/checkout.js';

const router = express.Router();

router.post('/checkout', createPlisioInvoice);


export default router;
