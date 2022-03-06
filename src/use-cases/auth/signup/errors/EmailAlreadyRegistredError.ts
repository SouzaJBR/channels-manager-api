import { ValidationError } from "../../../../base/errors/ValidationError";

export class EmailAlreadyRegistredError extends ValidationError {
    constructor() {
        super('The provided email is already registred');
    }
}