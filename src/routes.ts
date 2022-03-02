import { request, response, Router } from 'express';
import { container } from 'tsyringe';
import { CreateCategoryController } from './use-cases/create-category/CreateCategoryController';
import { DeleteCategoryController } from './use-cases/delete-category/DeleteCategoryController';
import { DetailCategoryController } from './use-cases/detail-category/DetailCategoryController';
import { ListCategoriesController } from './use-cases/list-categories/ListCategoriesController';
import { LoginController } from './use-cases/login/LoginController';
import { SignupController } from './use-cases/signup/SignupController';

const router = Router();

router.post('/categories', async (request, response) => {
    const createCategoryController = container.resolve(CreateCategoryController);
    await createCategoryController.handle(request, response);
});

router.get('/categories', async (request, response) => {
    const listCategoriesController = container.resolve(ListCategoriesController);
    await listCategoriesController.handle(request, response);
});

router.delete('/categories/:id', async (request, response) => {
    const deleteCategoryController = container.resolve(DeleteCategoryController);
    await deleteCategoryController.handle(request, response);
});

router.get('/categories/:id', async (request, response) => {
    const detailCategoryController = container.resolve(DetailCategoryController);
    await detailCategoryController.handle(request, response);
});

router.post('/login', async (request, response) => {
    const loginController = container.resolve(LoginController);
    await loginController.handle(request, response);
});

router.post('/signup', async (request, response) => {
    const signupController = container.resolve(SignupController);
    await signupController.handle(request, response);
});

export { router };