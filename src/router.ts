import { Router } from "express";
import {
  HomeController
} from "./controllers";

const router: Router = Router();

router.use("/", HomeController);

export const routes: Router = router;