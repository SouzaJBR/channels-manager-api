import { Request, Response} from 'express';
import { inject, injectable } from 'tsyringe';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

@injectable()
export class CreateCategoryController {
    constructor(@inject(CreateCategoryUseCase) private createCategoryUseCase: CreateCategoryUseCase) {}

    async handle(request: Request, response: Response) {
        const { name } = request.body;

        try {
            await this.createCategoryUseCase.execute({ name });
            response.status(201).send();
        } catch(e) {
            response.status(400).json({
                success: false,
                message: e.message,
            });
        }

    }
}