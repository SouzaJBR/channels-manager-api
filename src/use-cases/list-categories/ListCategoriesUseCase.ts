import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
export class ListCategoriesUseCase {
    constructor(@inject('CategoriesRepository') private categoriesRepositories: ICategoriesRepository) { }

    async execute() {
        const categories = await this.categoriesRepositories.all();
        return categories;        
    }
}