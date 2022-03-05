import { BaseController } from "@base/controllers/BaseController";
import { Request, Response } from "express";
import { ValidationChain } from "express-validator";
import { inject, injectable } from "tsyringe";
import { validator } from "./DetailCategoryRequestValidator";
import { DetailCategoryUseCase } from "./DetailCategoryUseCase";

@injectable()
export class DetailCategoryController extends BaseController {
    constructor(@inject(DetailCategoryUseCase) private detailCategoryUseCase : DetailCategoryUseCase) { super() }

    validationRules: ValidationChain[] = validator();

    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const result = await this.detailCategoryUseCase.execute({ id });

        response.json(result);
    }
}