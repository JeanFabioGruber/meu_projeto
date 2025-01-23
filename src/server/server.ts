import 'reflect-metadata';
import express from 'express'
import { AppDataSource } from '../data-source';

const app = express();
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        app.use(express.json());

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => console.log(error));
