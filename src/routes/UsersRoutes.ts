import { Router } from "express";
import { UsersController } from "../controller/UsersController";

const usersRoutes = Router();

const controller = new UsersController();

usersRoutes.get("/list", controller.list);
usersRoutes.post("/", controller.create);
usersRoutes.get("/:id", controller.show);

export { usersRoutes };
