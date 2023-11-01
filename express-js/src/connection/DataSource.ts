import {DataSource} from "typeorm";
import Meeting from "../entity/Meeting";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const AppDataSource = new DataSource({
    type: "postgres", 
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [ Meeting ],
    synchronize: true,
    logging: false,
    poolErrorHandler: (err) => console.log(err),
    poolSize: 8
} as PostgresConnectionOptions);

AppDataSource.initialize()
    .then((value: DataSource) => {
        console.log(`Database connection was ${value.isInitialized ? 'initialized' : 'not initialized'}.`);
    })
    .catch((error) => console.log(error))