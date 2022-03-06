import { Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";
import { ValidationError } from "../errors/ValidationError";

export abstract class BaseController {
    validationRules: ValidationChain[] = [];
    
    abstract handle(request: Request, response: Response): Promise<any>;
    
    async execute(request: Request, response: Response, next) {
        try {
            const rules = this.validationRules || [];

            await Promise.all(rules.map(validation => validation.run(request)));
            const errors = validationResult(request);

            if (errors.isEmpty()) 
                return await this.handle(request, response);
            
            else throw new ValidationError(errors.array()[0].msg);

        } catch(e) {
            next(e);
        }
    }
}