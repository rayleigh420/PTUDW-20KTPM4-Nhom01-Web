import express from 'express'
import adminAPIController from "../controllers/adminAPIController"

let router = express.Router();

const initAdminAPIRoute = (app) => {
    router.post("/checkTrip", adminAPIController.checkTrip)

    return app.use('/admin/api', router)

}

export default initAdminAPIRoute



