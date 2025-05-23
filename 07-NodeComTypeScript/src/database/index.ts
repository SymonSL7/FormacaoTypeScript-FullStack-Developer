import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/db.sqlite",
    synchronize: true,
    logging: true,
    subscribers: [],
    migrations: [
        'src/database/migrations/*.ts'
    ],
})

AppDataSource.initialize()
.then(() => {
    console.log('Data Source inicializado!');
})
.catch((error) => {
    console.error(error);
});