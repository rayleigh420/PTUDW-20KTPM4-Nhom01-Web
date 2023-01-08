import express from "express";
import seatController from "../controllers/seatController"

let router = express.Router();

const initSeatRoute = (app) => {
    router.post("/checkSeat", seatController.checkSeat);

    return app.use("/seat", router);
};

export default initSeatRoute;

