import express from 'express';
import cors from 'cors';

import { jwtValidationMiddleware } from './authentication/middleware';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(jwtValidationMiddleware.unless({ path: ['/login', '/signup']}));
app.use(router);

export { app };
