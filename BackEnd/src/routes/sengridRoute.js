import express from "express";
import mailController from "../controllers/mailController";

let router = express.Router();

const initMailRoute = (app) => {
  router.get("/sengrid", mailController.sengridAPI);

  return app.use("/api", router);
};

export default initMailRoute;
