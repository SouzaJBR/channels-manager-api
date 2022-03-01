import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

@injectable()
export class DeleteCategoryController {
    constructor(@inject(DeleteCategoryUseCase) private deleteCategoryUseCase: DeleteCategoryUseCase) {}

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        await this.deleteCategoryUseCase.execute({ id });

        response.json({
            success: true,
        })
    }
}