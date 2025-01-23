import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'meu_banco',
    entities: [
        `${__dirname}/**/entity/*.{ts,js}`
    ],
    migrations: [
        `${__dirname}/**/migrations/*.{ts,js}`
    ],
    synchronize: false,
    logging: false,
});
