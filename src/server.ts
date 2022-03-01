import 'reflect-metadata';

import 'dotenv/config';
import { container } from 'tsyringe';

import { app } from "./app";
import { createDbConnection } from './database/connection';
import { Connection, ConnectionManager, getConnectionManager } from 'typeorm';
import { TypeOrmCategoriesRepository } from './repositories/implementations/TypeOrmCategoriesRepository';
import { ICategoriesRepository } from './repositories/ICategoriesRepository';

const PORT = process.env.PORT || '3333';

const setupServer = async () => {
    await createDbConnection();
    
    container.register<Connection>('database-connection', { useFactory: (_) => getConnectionManager().get()});
    container.register<ICategoriesRepository>('CategoriesRepository', { useFactory: (_) => {
        const connection = container.resolve<Connection>('database-connection');
        return connection.getCustomRepository(TypeOrmCategoriesRepository);
    }})

    app.listen(PORT, () => console.log(`server is up at the port ${PORT}...`));
}

setupServer();