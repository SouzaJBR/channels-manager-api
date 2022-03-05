import { param, ValidationChain } from "express-validator";

export function validator(): ValidationChain[] {
    return [
        param('id')
            .isUUID().withMessage('Pleade provide a valid ID.')
    ]
}