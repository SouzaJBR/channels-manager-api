import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";
import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { DetailCategoryRequestDTO } from "./DetailCategoryRequestDTO";

@injectable()
export class DetailCategoryUseCase {
    constructor(@inject('CategoriesRepository') private categoriesRepository: ICategoriesRepository) { }

    async execute(data: DetailCategoryRequestDTO) {
        const { id } = data;

        const category = await this.categoriesRepository.findById(id);

        return category;
    }
}