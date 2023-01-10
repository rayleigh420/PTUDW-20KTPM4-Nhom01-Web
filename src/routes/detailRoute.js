import express from "express";
import detailController from "../controllers/detailController";

let router = express.Router();

const initDetailRoute = (app) => {
    router.post("/:idTicket", detailController.handleRate);
    router.get("/:idTicket", detailController.getDetailPage);
    // router.post("/:idTicket/rate", detailController.handleRate);
    // router.get('/', detailController.getDetailPage)

    return app.use("/detail", router);
};

export default initDetailRoute;
