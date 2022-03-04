import { ConnectionOptions } from "typeorm";
import { parse } from 'pg-connection-string';

const localConfig : ConnectionOptions = {
    type: 'sqlite',
    database: './.tmp/database.sqlite',
};

const { host, database, port, user, password} = parse(process.env.DATABASE_URL || '');

const productionConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || host,
    port: Number(process.env.DATABASE_PORT || port),
    username: process.env.DATABASE_USER || user,
    password: process.env.DATABASE_PASSWORD || password,
    database: process.env.DATABASE_NAME || database,
};

const currentConfig = process.env.NODE_ENV === 'production' ? productionConfig : localConfig;

const typeormConnectionOptions: ConnectionOptions = Object.assign({
    migrations: ["./src/database/migrations/**.ts"],
    entities: ["./src/entities/**.ts"],
    cli: {
        "migrationsDir": "./src/database/migrations"
    },
    name: 'default'
}, currentConfig);

export default typeormConnectionOptions;