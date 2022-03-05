import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

@injectable()
export class ListCategoriesController {
    constructor(@inject(ListCategoriesUseCase) private listCategoriesUseCase: ListCategoriesUseCase) {}

    async handle(request: Request, response: Response) {
        const result = await this.listCategoriesUseCase.execute();

        response.json(result);
    }
}