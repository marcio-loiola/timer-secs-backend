import { Router } from "express";
import { helloWorldRoutes } from "./HelloWorldRoutes";

const routes = Router();

routes.use("/hello-world", helloWorldRoutes);

export { routes };
