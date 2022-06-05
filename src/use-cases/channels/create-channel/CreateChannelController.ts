import { Request, Response } from "express";
import { ValidationChain } from "express-validator";
import { BaseController } from '../../../base/controllers/BaseController';
import { inject, injectable } from "tsyringe";
import { validator } from "./CreateChannelRequestValidator";
import { CreateChannelUseCase } from "./CreateChannelUseCase";

@injectable()
export class CreateChannelController extends BaseController {
    constructor(@inject(CreateChannelUseCase) private createChannelUseCase: CreateChannelUseCase) { super() }

    validationRules: ValidationChain[] = validator();

    async handle(request: Request, response: Response) {
        const data = request.body;

        await this.createChannelUseCase.execute(data);
        response.status(201).send();
    }
}