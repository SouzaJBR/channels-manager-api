import { Router } from 'express';
import { container } from 'tsyringe';
import { ConnectionManager, getConnectionManager, getCustomRepository } from 'typeorm';
import { createDbConnection } from './database/connection';
import { TypeOrmCategoriesRepository } from './repositories/implementations/TypeOrmCategoriesRepository';
import { createCategoryController } from './use-cases/create-category';
import { CreateCategoryController } from './use-cases/create-category/CreateCategoryController';
import { CreateCategoryUseCase } from './use-cases/create-category/CreateCategoryUseCase';

const router = Router();

router.post('/categories', async (request, response) => {
    const createCategoryController = container.resolve(CreateCategoryController);
    await createCategoryController.handle(request, response);
});

export { router };