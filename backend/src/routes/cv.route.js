import { Router } from 'express';
import { getCv } from '../controllers/cv.controller.js';

const router = Router();

router.get('/cv', getCv);

export default router;
