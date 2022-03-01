import { createConnection } from "typeorm";
import typeormConnectionOptions from "../config/database";

export const createDbConnection = async () => createConnection(typeormConnectionOptions);
