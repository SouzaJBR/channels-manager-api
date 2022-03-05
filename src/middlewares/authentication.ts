import jwt from 'express-jwt';
import { jwtTokenSecret } from '../config/jwt';

export const jwtValidationMiddleware = jwt({
    secret: jwtTokenSecret,
    algorithms: ['HS256']
});