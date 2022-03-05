import { BusinessError } from "@base/errors/BusinessError";

export class InvalidCredentialsError extends BusinessError {
    constructor() {
        super('Invalid credentials. Try again');
    }
}