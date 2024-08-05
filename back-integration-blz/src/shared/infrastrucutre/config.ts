import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod';
dotenv.config({ path: `./env/${envFile}` });

export const config = {
    server: {
        port: Number(process.env.PORT) || 3000,
        url: process.env.URL || 'localhost',
    },
    database: {
        host: process.env.HOST,
        port: process.env.PORT_DB,
        user: process.env.USER,
        password: process.env.PASSWORD_BD,
        database: process.env.DATABASE,
    }
};