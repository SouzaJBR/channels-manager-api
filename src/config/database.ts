import { ConnectionOptions } from "typeorm";
import { parse } from 'pg-connection-string';

const localConfig : ConnectionOptions = {
    type: 'sqlite',
    database: './.tmp/database.sqlite',
    entities: ["src/entities/**.ts"],
    migrations: ["src/database/migrations/**.ts"],
    cli: {
        migrationsDir: "./src/database/migrations",
        entitiesDir: "./src/entities/**.ts"
    },
};

const { host, database, port, user, password} = parse(process.env.DATABASE_URL || '');

const productionConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || host,
    port: Number(process.env.DATABASE_PORT || port),
    username: process.env.DATABASE_USER || user,
    password: process.env.DATABASE_PASSWORD || password,
    database: process.env.DATABASE_NAME || database,
    entities: ["dist/entities/**.js"],
    migrations: ["dist/database/migrations/**.js"],
};

const currentConfig = process.env.NODE_ENV === 'production' ? productionConfig : localConfig;

const typeormConnectionOptions: ConnectionOptions = Object.assign({
    name: 'default'
}, currentConfig);

export default typeormConnectionOptions;