import { ICategoriesRepository } from "@src/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListCategoriesUseCase {
    constructor(@inject('CategoriesRepository') private categoriesRepositories: ICategoriesRepository) { }

    async execute() {
        const categories = await this.categoriesRepositories.all();
        return categories;        
    }
}