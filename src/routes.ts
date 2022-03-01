import { Router } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryController } from './use-cases/create-category/CreateCategoryController';
import { ListCategoriesController } from './use-cases/list-categories/ListCategoriesController';

const router = Router();

router.post('/categories', async (request, response) => {
    const createCategoryController = container.resolve(CreateCategoryController);
    await createCategoryController.handle(request, response);
});

router.get('/categories', async (request, response) => {
    const listCategoriesController = container.resolve(ListCategoriesController);
    await listCategoriesController.handle(request, response);
})

export { router };