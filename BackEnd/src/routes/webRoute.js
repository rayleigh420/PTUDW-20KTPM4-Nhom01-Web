import express from "express";
import webController from "../controllers/webController";
import userController from "../controllers/userController";
import dbController from "../controllers/dbController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", webController.getHomePage);
  router.get("/signUp", webController.getSignUpPage);
  router.get("/signIn", webController.getSignInPage);
  router.get("/info_form/:idTicket", webController.getInfoFormPage);
  router.post("/info_check", webController.getInfoCheckPage);
  // router.get('/history', webController.getHistoryPage)

  router.post("/signUp", userController.signUp);
  router.post("/signIn", userController.signIn);

  router.get("/createTable", dbController.createTable);

  return app.use("/", router);
};

export default initWebRoute;
