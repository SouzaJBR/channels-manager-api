import { Category } from "../entities/Category";

export interface ICategoriesRepository {
    all() : Promise<Category[]>;
    save(category: Category) : Promise<void>;
}