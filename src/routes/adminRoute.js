import express from "express";
import adminController from "../controllers/adminController";

let router = express.Router();

const initAdminRoute = (app) => {
    router.get("/", adminController.getAdminPage);

    router.get("/adminCarOwner", adminController.getCarOwnerAdmin);
    router.get("/adminTrip", adminController.getTripAdmin);
    router.get("/adminSeat", adminController.getSeatAdmin);
    router.get("/adminTicket", adminController.getTicketAdmin);

    router.post("/addCarOwner", adminController.addCarOwner);
    router.post("/updateCarOwner/:id", adminController.updateCarOwner);
    router.get("/deleteCarOwner/:id", adminController.deleteCarOwner);

    router.post("/addTrip", adminController.addTrip);
    router.post("/updateTrip/:id", adminController.updateTrip);
    router.get("/deleteTrip/:id", adminController.deleteTrip);

    router.post("/updateSeat/:id", adminController.updateSeat);

    router.get("/adminTicketTest", adminController.testInsert);
    router.post("/addTicket", adminController.addTicket);
    router.get("/deleteTicket/:id", adminController.deleteTicket);

    return app.use("/admin", router);
};

export default initAdminRoute;
