import {Router} from 'express'
import { weatherData } from '../controllers/weather.controller.js';

const router = Router();

router.get('/',weatherData);
    

export default router