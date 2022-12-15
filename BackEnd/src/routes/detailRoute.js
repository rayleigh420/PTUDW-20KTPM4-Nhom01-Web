import express from 'express'
import detailController from '../controllers/detailController'

let router = express.Router();

const initDetailRoute = (app) => {
    router.get('/detail/:idTicket', detailController.getDetailPage)
    // router.get('/', detailController.getDetailPage)

    return app.use('/', router)

}

export default initDetailRoute


