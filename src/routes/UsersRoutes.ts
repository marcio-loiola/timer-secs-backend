import { Router } from "express";

import { UsersController } from "../controller/UsersController";

const usersRoutes = Router();

const controller = new UsersController();

usersRoutes.get("/rota", controller.show);

export { usersRoutes };
