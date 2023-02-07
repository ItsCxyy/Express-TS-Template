import { Router, Request, Response } from "express";

import { helloWorld } from "../middlewares";
import { config } from "../config";

const router: Router = Router();

router.get("/", (req: Request, res: Response): void => {
  res.status(200).json({
    status: "ok",
    version: config.VERSION
  });
});

router.get("/hello", helloWorld, (req: Request, res: Response): void => {
  res.status(200).send("Hello World!");
});

export const HomeController: Router = router;