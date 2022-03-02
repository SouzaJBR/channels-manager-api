import { EntityRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

@EntityRepository(User)
export class TypeOrmUsersRepository extends Repository<User> implements IUsersRepository {
    async findByEmail(email: string): Promise<User> {
        return this.findOne({
            email,
        });
    }
}