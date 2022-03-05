import express, { Request, Response } from 'express';
import cors from 'cors';

import { router } from '@src/routes';
import { jwtValidationMiddleware } from '@middlewares/authentication';
import { errorHandlerMiddleware } from '@middlewares/error-handler';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use(errorHandlerMiddleware);
export { app };
