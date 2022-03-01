import { EntityRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

@EntityRepository(Category)
export class TypeOrmCategoriesRepository extends Repository<Category> implements ICategoriesRepository { 
    async all() {
        return this.find();
    }
}