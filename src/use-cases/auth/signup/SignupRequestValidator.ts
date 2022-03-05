import { body, ValidationChain } from "express-validator";

export function validator(): ValidationChain[] {
    return [
        body('email').isEmail().withMessage('Please provide a valid email address'),
        body('password').isString().withMessage('Passwords should be string').isLength({ min: 8 }).withMessage('Please insert a valid password'),
        body('name').isString().withMessage('Name should be string').isLength({ min: 3 }).withMessage('Please insert a valid name'),
    ]
}