import { BaseController } from "@base/controllers/BaseController";
import { Request, Response } from "express";
import { ValidationChain } from "express-validator";
import { inject, injectable } from "tsyringe";
import { validator } from "../login/LoginRequestValidator";
import { SignupUseCase } from "./SignupUseCase";

@injectable()
export class SignupController extends BaseController {
    constructor(@inject(SignupUseCase) private signupUseCase: SignupUseCase) {
        super();
    }
    
    validationRules: ValidationChain[] = validator();

    async handle(request: Request, response: Response) {
        const { email, name, password } = request.body;
        
        await this.signupUseCase.execute({ email, name, password });
        response.status(201).send();

    }
}