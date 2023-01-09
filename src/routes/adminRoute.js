import express from 'express'
import adminController from "../controllers/adminController"

let router = express.Router();

const initAdminRoute = (app) => {
    router.get('/', adminController.getAdminPage)
    router.get('/adminCarOwner', adminController.getCarOwnerAdmin)
    router.get('/adminTrip', adminController.getTripAdmin)

    router.post('/addCarOwner', adminController.addCarOwner)
    router.post('/updateCarOwner/:id', adminController.updateCarOwner)
    router.get('/deleteCarOwner/:id', adminController.deleteCarOwner)

    router.post('/updateTrip/:id', adminController.updateTrip)

    return app.use('/admin', router)

}

export default initAdminRoute


