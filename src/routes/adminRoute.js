import express from 'express'
import adminController from "../controllers/adminController"

let router = express.Router();

const initAdminRoute = (app) => {
    router.get('/', adminController.getAdminPage)
    router.post('/updateCarOwner/:id', adminController.updateCarOwner)
    router.get('/deleteCarOwner/:id', adminController.deleteCarOwner)

    return app.use('/admin', router)

}

export default initAdminRoute


