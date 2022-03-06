import { BaseController } from "../../../base/controllers/BaseController";
import { Request, Response } from "express";
import { ValidationChain } from "express-validator";
import { inject, injectable } from "tsyringe";
import { validator } from "./LoginRequestValidator";
import { LoginUseCase } from "./LoginUseCase";

@injectable()
export class LoginController extends BaseController {
    constructor(
        @inject(LoginUseCase) private loginUseCase: LoginUseCase) {
        super();
    }

    validationRules: ValidationChain[] = validator();

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const result = await this.loginUseCase.execute({ email, password });
        response.json(result);
    }
}