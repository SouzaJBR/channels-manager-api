import { Category } from "../entities/Category";

export interface ICategoriesRepository {
    save(category: Category) : Promise<void>;
}