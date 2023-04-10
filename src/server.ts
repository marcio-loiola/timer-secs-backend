import express, { Router } from "express";

const app = express();

const routes = Router();

routes.get("/rota", (request, response) => {
  return response.status(200).json({
    message: "Ave Maria",
  });
});

app.use(routes);

app.listen(3333, () => {
  console.log("Server started at port 3333");
});
