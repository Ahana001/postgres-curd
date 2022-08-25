import type { Knex } from "knex";
import path from 'path';

interface KnexConfig { [key: string]: Knex.Config }
const config: KnexConfig = {
  development: {
    client: "postgresql",
    connection: {
      database: "customer-details",
      user: "postgres",
      password: "Ankita0105@123"
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
