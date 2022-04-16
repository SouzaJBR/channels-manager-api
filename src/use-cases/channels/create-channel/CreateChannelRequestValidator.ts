import { body, ValidationChain } from "express-validator";

export function validator(): ValidationChain[] {
    return [
        body('name')
            .isString()
                .withMessage('Name should be string')
            .isLength({ min: 5, max: 100 })
                .withMessage('Name should have between 5 and 100 characters long'),
        
        body('slug')
            .isSlug()
                .withMessage('Slug is invalid')
            .isLength({ max: 100 })
                .withMessage('Slug is required with up to 100 characters long'),

        body('number')
            .isNumeric()
                .withMessage('A channel number is required and must be numeric')
            .toInt(),

        body('logoUrl')
            .isURL()
                .withMessage('Logo URL is invalid')
            .isLength({ max: 256 })
                .withMessage('Logo URL must contains up to 256 characters long')
            .optional({ nullable: true })
                .withMessage('URL must to be up to 256 characters long'),

        body('categories')
            .notEmpty()
                .withMessage('Categories should not be empty'),
        
        body('categories.*')
            .isUUID()
                .withMessage('Category Id must be in UUID format')
    ]
}