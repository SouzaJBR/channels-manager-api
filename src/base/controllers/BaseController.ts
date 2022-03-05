import { ValidationError } from "@base/errors/ValidationError";
import { Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";

export abstract class BaseController {
    abstract handle(request: Request, response: Response): Promise<any>;
    abstract validate() : ValidationChain[];
    async execute(request: Request, response: Response, next) {
        try {
            const rules = this.validate();

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