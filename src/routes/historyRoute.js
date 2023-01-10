import express from "express";
import detailController from "../controllers/detailController";
import historyController from "../controllers/historyController";
let router = express.Router();

const initHistoryRoute = (app) => {
	router.get("/:id", historyController.getHistoryPage);

	return app.use("/history", router);
};

export default initHistoryRoute;
