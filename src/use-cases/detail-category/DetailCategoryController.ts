import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { DetailCategoryUseCase } from "./DetailCategoryUseCase";

@injectable()
export class DetailCategoryController {
    constructor(@inject(DetailCategoryUseCase) private detailCategoryUseCase : DetailCategoryUseCase) { }

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const result = await this.detailCategoryUseCase.execute({ id });

        response.json(result);
    }
}