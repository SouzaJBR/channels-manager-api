import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";
import { DeleteCategoryRequestDTO } from "./DeleteCategoryRequestDTO";

@injectable()
export class DeleteCategoryUseCase {
    constructor(@inject('CategoriesRepository') private categoriesRepository: ICategoriesRepository) {}

    async execute(data: DeleteCategoryRequestDTO) {
        const { id } = data;
        const category = await this.categoriesRepository.findById(id);
        
        if(category)
            await this.categoriesRepository.delete(category);
    }
}