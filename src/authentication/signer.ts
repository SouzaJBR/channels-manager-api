import jwt from 'jsonwebtoken';
import { jwtTokenSecret } from '../config/jwt';

export const createJwtToken = (payload) => {
    return jwt.sign(payload, jwtTokenSecret, { algorithm: 'HS256', expiresIn: '1h' });
}