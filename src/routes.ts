import { BaseController } from "@base/controllers/BaseController";
import { jwtValidationMiddleware as authenticated } from "@middlewares/authentication";
import { LoginController } from "@use-cases/auth/login/LoginController";
import { SignupController } from "@use-cases/auth/signup/SignupController";
import { CreateCategoryController } from "@use-cases/categories/create-category/CreateCategoryController";
import { DeleteCategoryController } from "@use-cases/categories/delete-category/DeleteCategoryController";
import { DetailCategoryController } from "@use-cases/categories/detail-category/DetailCategoryController";
import { ListCategoriesController } from "@use-cases/categories/list-categories/ListCategoriesController";
import { Router } from "express";
import { container } from "tsyringe";

const router = Router();

const categories = () => {
    const router = Router();

    router.use(authenticated);

    router.post('/', async (request, response, next) => {
        const signupController = container.resolve<BaseController>(CreateCategoryController);
        return signupController.execute(request, response, next);
    });
    
    router.get('/', async (request, response, next) => {
        const signupController = container.resolve<BaseController>(ListCategoriesController);
        return signupController.execute(request, response, next);
    });
    
    router.delete('/:id', async (request, response, next) => {
        const signupController = container.resolve<BaseController>(DeleteCategoryController);
        return signupController.execute(request, response, next);
    });
    
    router.get('/:id', async (request, response, next) => {
        const signupController = container.resolve<BaseController>(DetailCategoryController);
        return signupController.execute(request, response, next);
    });

    return router;
}

const auth = () => {
    const router = Router();

    router.post('/login' , async (request, response, next) => {
        const signupController = container.resolve<BaseController>(LoginController);
        return signupController.execute(request, response, next);
    });
    
    router.post('/signup', async (request, response, next) => {
        const signupController = container.resolve<BaseController>(SignupController);
        return signupController.execute(request, response, next);
    });

    return router;
}

router.use('/auth', auth());
router.use('/categories', categories());

export { router };