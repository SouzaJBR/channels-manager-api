

import { User } from '@entities/User';
import { IUsersRepository } from '@src/repositories/IUsersRepository';
import bcrypt from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { EmailAlreadyRegistredError } from './errors/EmailAlreadyRegistredError';
import { SignupRequestDTO } from './SignupRequestDTO';


@injectable()
export class SignupUseCase {
    constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) {}

    async execute(data: SignupRequestDTO) {
        const { email, password, name} = data;

        console.log(data);
        
        const registredUser = await this.usersRepository.findByEmail(email);
        if(registredUser)
            throw new EmailAlreadyRegistredError();
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ email, name, password: hashedPassword });
        await this.usersRepository.save(user);
    }
}