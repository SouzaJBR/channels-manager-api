import { body } from "express-validator";
import { injectable } from "tsyringe";

@injectable()
export class SignupRequestValidator {
    validator() {
        return [
            body('email').isEmail().withMessage('Please provide a valid email address'),
            body('password').isString().withMessage('Passwords should be string').isLength({ min: 8 }).withMessage('Please insert a valid password'),
            body('name').isString().withMessage('Name should be string').isLength({ min: 3 }).withMessage('Please insert a valid name'),
        ]
    }
}