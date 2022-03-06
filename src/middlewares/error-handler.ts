import { BusinessError } from '../base/errors/BusinessError';
import { ValidationError } from '../base/errors/ValidationError';
import { Request, Response } from 'express';
import { UnauthorizedError } from 'express-jwt';
import { EntityNotFoundError } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandlerMiddleware = (err: Error, _request: Request, response: Response, _next) => {
    if(err instanceof EntityNotFoundError) {
        response.status(404).json({
            success: false,
            message: 'Not found',
        });
    } else if (err instanceof ValidationError) {
        response.status(400).json({
            success: false,
            message: err.message,
        });
    } else if (err instanceof UnauthorizedError) {
        response.status(401).send();
    } else if(err instanceof BusinessError) {
        response.status(200).json({
            success: false,
            message: err.message,
        });
    } else {
        console.error(err);

        response.status(500).json({
            success: false,
            message: 'Something went wrong.',
        });
    }
};