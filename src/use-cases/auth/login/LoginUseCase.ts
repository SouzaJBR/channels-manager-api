import { createJwtToken } from "@src/authentication/signer";
import { IUsersRepository } from "@src/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { InvalidCredentialsError } from "./errors/InvalidCredentialsError";
import { LoginRequestDTO } from "./LoginRequestDTO";

import bcrypt from 'bcrypt';
@injectable()
export class LoginUseCase {
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}

    async execute(data: LoginRequestDTO) {
        const { email, password } = data;

        const user = await this.usersRepository.findByEmail(email);

        const isCredentialsValid = user && (await bcrypt.compare(password, user.password));
        if(!isCredentialsValid)
            throw new InvalidCredentialsError();

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
        };

        const token = createJwtToken(payload);

        return {
            type: 'bearer',
            token
        };
    }
}