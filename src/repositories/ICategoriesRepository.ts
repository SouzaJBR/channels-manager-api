import { Category } from '../entities/Category';

export interface ICategoriesRepository {
    all() : Promise<Category[]>;
    save(category: Category) : Promise<void>;
    delete(category: Category) : Promise<void>;
    findById(id: string) : Promise<Category>;
}