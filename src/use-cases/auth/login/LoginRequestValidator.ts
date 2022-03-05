import { body } from "express-validator";
import { injectable } from "tsyringe";

@injectable()
export class LoginRequestValidator {
    validator() {
        return [
            body('email').isEmail().withMessage("Invalid email"),
            body('password').isString().withMessage('Passwords should be string').isLength({ min: 5 }).withMessage("Please provide a password"),
        ];
    }
}