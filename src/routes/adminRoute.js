import express from 'express'
import adminController from "../controllers/adminController"

let router = express.Router();

const initAdminRoute = (app) => {
    router.get('/', adminController.getAdminPage)

    return app.use('/admin', router)

}

export default initAdminRoute


