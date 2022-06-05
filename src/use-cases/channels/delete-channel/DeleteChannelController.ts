import { BaseController } from "../../../base/controllers/BaseController";
import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { DeleteChannelUseCase } from "./DeleteChannelUseCase";
import { ValidationChain } from "express-validator";
import { validator } from "./DeleteChannelRequestValidator";


@injectable()
export class DeleteChannelController extends BaseController {
    constructor(@inject(DeleteChannelUseCase) private deleteChannelUseCase: DeleteChannelUseCase) { super() }
    
    validationRules: ValidationChain[] = validator();
    
    async handle(request: Request, response: Response): Promise<any> {
        const { id } = request.params;
        
        await this.deleteChannelUseCase.execute({ id });

        response.json({
            success: true,
        })
    }

}