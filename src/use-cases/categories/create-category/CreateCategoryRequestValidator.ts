import { body, ValidationChain } from "express-validator";

export function validator(): ValidationChain[] {
    return [
        body('name')
            .isString().withMessage('Name should be string.')
            .isLength({ min: 3, max: 50 }).withMessage('Name should be between 3 and 50 characters long.'),
    ]
}