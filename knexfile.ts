import type { Knex } from "knex";
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

interface KnexConfig { [key: string]: Knex.Config }
const config: KnexConfig = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
  }
};

export default config;
