import express from "express";
import webController from "../controllers/webController";
import userController from "../controllers/userController";
import dbController from "../controllers/dbController";

let router = express.Router();

const initUserRoute = (app) => {
    router.post("/checkLocal", userController.checkUser);
    router.post("/signin", userController.apiSignIn);
    router.post("/signUp", userController.apiSignUp);
    router.post("/getIdByEmail", userController.getIdByEmail);
    return app.use("/user", router);
};

export default initUserRoute;
