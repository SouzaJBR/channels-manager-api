import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { LoginUseCase } from "./LoginUseCase";

@injectable()
export class LoginController {
    constructor(@inject(LoginUseCase) private loginUseCase : LoginUseCase) {}

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        try {
            const result = await this.loginUseCase.execute({email, password});
            response.json(result);
        } catch(e) {
            response.json({
                success: false,
                message: e.message
            })
        }
    }
}