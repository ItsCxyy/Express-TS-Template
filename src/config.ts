import "dotenv/config";

import { Config } from "./interfaces";

export const config: Config = {
  PORT: 4000,
  VERSION: "1.0.0",
  PREFIX: "My Server »",
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_DATABASE,
  DB_COLLECTION: process.env.DB_PLAYERS_COLLECTION,
};