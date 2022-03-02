export class EmailAlreadyRegistredError extends Error {
    constructor() {
        super('The provided email is already registred');
    }
}