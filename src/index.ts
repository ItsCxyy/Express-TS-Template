import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import http from "http";

import { initDatabaseSetup } from "./databases/Connection.database"; 
import { routes } from "./router";
import { config } from "./config";

const app: Application = express();

(async (): Promise<void> => {
  await initDatabaseSetup();

  app.use(
    cors({
      origin: [
        "http://localhost:3000", // React App
        "http://localhost:8080", // Vue App
      ],
      credentials: true
    })
  );
  app.use(helmet());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());

  app.use("/", routes);

  http.createServer(app).listen(config.server_port, (): void => {
    console.log(`${config.prefix} Server started on port ${config.server_port}!`);
  });
})();