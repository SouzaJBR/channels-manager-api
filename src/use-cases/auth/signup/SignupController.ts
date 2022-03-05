import { BaseController } from "@base/controllers/BaseController";
import { Request, Response } from "express";
import { ValidationChain } from "express-validator";
import { inject, injectable } from "tsyringe";
import { SignupRequestValidator } from "./SignupRequestValidator";
import { SignupUseCase } from "./SignupUseCase";

@injectable()
export class SignupController extends BaseController {
    constructor(@inject(SignupUseCase) private signupUseCase: SignupUseCase, @inject(SignupRequestValidator) private signupRequestValidator: SignupRequestValidator) {
        super();
    }
    
    validate(): ValidationChain[] {
        return this.signupRequestValidator.validator();
    }

    async handle(request: Request, response: Response) {
        const { email, name, password } = request.body;
        
        await this.signupUseCase.execute({ email, name, password });
        response.status(201).send();

    }
}