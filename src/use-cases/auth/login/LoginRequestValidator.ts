import { body, ValidationChain } from "express-validator";

export function validator(): ValidationChain[] {
    return [
        body('email').isEmail().withMessage("Invalid email"),
        body('password').isString().withMessage('Passwords should be string').isLength({ min: 5 }).withMessage("Please provide a password"),
    ]
}