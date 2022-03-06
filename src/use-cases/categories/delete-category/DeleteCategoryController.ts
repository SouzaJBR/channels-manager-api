import { BaseController } from "../../../base/controllers/BaseController";
import { Request, Response } from "express";
import { ValidationChain } from "express-validator";
import { inject, injectable } from "tsyringe";
import { validator } from "./DeleteCategoryRequestValidator";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

@injectable()
export class DeleteCategoryController extends BaseController{
    constructor(@inject(DeleteCategoryUseCase) private deleteCategoryUseCase: DeleteCategoryUseCase) { super() }

    validationRules: ValidationChain[] = validator();

    async handle(request: Request, response: Response) {
        const { id } = request.params;
        await this.deleteCategoryUseCase.execute({ id });

        response.json({
            success: true,
        })
    }
}