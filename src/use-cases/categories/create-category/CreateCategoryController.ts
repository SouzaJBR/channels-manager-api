import { BaseController } from '@base/controllers/BaseController';
import { Request, Response } from 'express';
import { ValidationChain } from 'express-validator';
import { inject, injectable } from 'tsyringe';
import { validator } from './CreateCategoryRequestValidator';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

@injectable()
export class CreateCategoryController extends BaseController {
    constructor(@inject(CreateCategoryUseCase) private createCategoryUseCase: CreateCategoryUseCase) { super() }

    validationRules: ValidationChain[] = validator();

    async handle(request: Request, response: Response) {
        const { name } = request.body;

        await this.createCategoryUseCase.execute({ name });
        response.status(201).send();
    }
}