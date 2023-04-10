import { Router } from "express";

import { HelloWorldController } from "../controller/HelloWorldController";

const helloWorldRoutes = Router();

const controller = new HelloWorldController();

helloWorldRoutes.get("/rota", controller.show);

export { helloWorldRoutes };
