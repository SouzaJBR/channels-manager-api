import { BaseController } from "@base/controllers/BaseController";
import { LoginController } from "@use-cases/auth/login/LoginController";
import { SignupController } from "@use-cases/auth/signup/SignupController";
import { CreateCategoryController } from "@use-cases/categories/create-category/CreateCategoryController";
import { DeleteCategoryController } from "@use-cases/categories/delete-category/DeleteCategoryController";
import { DetailCategoryController } from "@use-cases/categories/detail-category/DetailCategoryController";
import { ListCategoriesController } from "@use-cases/categories/list-categories/ListCategoriesController";
import { Router } from "express";
import { container } from "tsyringe";

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

router.post('/login' , async (request, response, next) => {
    const signupController = container.resolve<BaseController>(LoginController);
    return signupController.execute(request, response, next);
});

router.post('/signup', async (request, response, next) => {
    const signupController = container.resolve<BaseController>(SignupController);
    return signupController.execute(request, response, next);
});

export { router };