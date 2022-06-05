import { BaseController } from "./base/controllers/BaseController";
import { jwtValidationMiddleware as authenticated } from "./middlewares/authentication";
import { LoginController } from "./use-cases/auth/login/LoginController";
import { SignupController } from "./use-cases/auth/signup/SignupController";
import { CreateCategoryController } from "./use-cases/categories/create-category/CreateCategoryController";
import { DeleteCategoryController } from "./use-cases/categories/delete-category/DeleteCategoryController";
import { DetailCategoryController } from "./use-cases/categories/detail-category/DetailCategoryController";
import { ListCategoriesController } from "./use-cases/categories/list-categories/ListCategoriesController";
import { CreateChannelController } from "./use-cases/channels/create-channel/CreateChannelController";
import { Router } from "express";
import { container } from "tsyringe";
import { ListChannelsController } from "./use-cases/channels/list-channels/ListChannelsController";

const router = Router();

const channels = () => {
    const router = Router();

    router.use(authenticated);

    router.post('/', async (request, response, next) => {
        const controller = container.resolve<BaseController>(CreateChannelController);
        return controller.execute(request, response, next);
    });

    router.get('/', async (request, response, next) => {
        const controller = container.resolve<BaseController>(ListChannelsController);
        return controller.execute(request, response, next);
    })

    return router;
}

const categories = () => {
    const router = Router();

    router.use(authenticated);

    router.post('/', async (request, response, next) => {
        const controller = container.resolve<BaseController>(CreateCategoryController);
        return controller.execute(request, response, next);
    });
    
    router.get('/', async (request, response, next) => {
        const controller = container.resolve<BaseController>(ListCategoriesController);
        return controller.execute(request, response, next);
    });
    
    router.delete('/:id', async (request, response, next) => {
        const controller = container.resolve<BaseController>(DeleteCategoryController);
        return controller.execute(request, response, next);
    });
    
    router.get('/:id', async (request, response, next) => {
        const controller = container.resolve<BaseController>(DetailCategoryController);
        return controller.execute(request, response, next);
    });

    return router;
}

const auth = () => {
    const router = Router();

    router.post('/login' , async (request, response, next) => {
        const controller = container.resolve<BaseController>(LoginController);
        return controller.execute(request, response, next);
    });
    
    router.post('/signup', async (request, response, next) => {
        const controller = container.resolve<BaseController>(SignupController);
        return controller.execute(request, response, next);
    });

    return router;
}

router.use('/auth', auth());
router.use('/categories', categories());
router.use('/channels', channels());

export { router };