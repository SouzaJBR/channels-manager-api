import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { SignupUseCase } from "./SignupUseCase";

@injectable()
export class SignupController {
    constructor(@inject(SignupUseCase) private signupUseCase: SignupUseCase) { }

    async handle(request: Request, response: Response) {
        const { email, name, password } = request.body;
        
        try {
            await this.signupUseCase.execute({ email, name, password });
            response.status(201).send();
        } catch (e) {
            response.status(400).json({
                success: false,
                message: e.message,
            })
        }

    }
}