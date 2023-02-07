import dotenv from "dotenv";
import { Config } from "./interfaces";

dotenv.config();

export const config: Config = {
  server_port: 4000,
  version: "1.0.0",
  prefix: "My Server »",
  db_host: process.env.DB_HOST,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_database: process.env.DB_DATABASE,
  db_collection: process.env.DB_PLAYERS_COLLECTION,
};