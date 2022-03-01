import { ConnectionOptions } from "typeorm";

const typeormConnectionOptions: ConnectionOptions = {
    type: 'sqlite',
    database: './.tmp/database.sqlite',
    migrations: ["./src/database/migrations/**.ts"],
    entities: ["./src/entities/**.ts"],
    cli: {
        "migrationsDir": "./src/database/migrations"
    },
    name: 'default'
};

export default typeormConnectionOptions;