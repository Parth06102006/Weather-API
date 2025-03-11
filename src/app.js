import express from 'express'

const app = express();

app.use(express.json())

import { errorHandler } from './middlewares/error.middleware.js';
import { limiter } from './middlewares/ratelimiter.middleware.js';

app.use(limiter);
app.use(errorHandler);
export default app;