import { Request, Response, NextFunction } from "express";

import { config } from "../config";

export const helloWorld = (req: Request, res: Response, next: NextFunction): void => {
  console.log(`${config.prefix} Hello World!`);
  next();
};