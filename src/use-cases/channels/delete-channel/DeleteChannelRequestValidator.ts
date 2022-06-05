import { body, param, ValidationChain } from "express-validator";

export function validator(): ValidationChain[] {
    return [
        param('id')
            .isUUID()
                .withMessage('Id should be in UUID format'),
    ]
}