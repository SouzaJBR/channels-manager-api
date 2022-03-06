import { Category } from "../../../entities/Category";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";
import { ICreateCategoryRequestDTO } from "./CreateCategoryDTO";

@injectable()
export class CreateCategoryUseCase {

    constructor(@inject('CategoriesRepository') private categoriesRepository: ICategoriesRepository) {}

    async execute(data: ICreateCategoryRequestDTO) {
        const category = new Category(data);

        await this.categoriesRepository.save(category);
    }
}