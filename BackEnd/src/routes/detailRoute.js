import express from 'express'
import detailController from '../controllers/detailController'

let router = express.Router();

const initDetailRoute = (app) => {
    router.get('/:idTicket', detailController.getDetailPage)
    // router.get('/', detailController.getDetailPage)

    return app.use('/detail', router)

}

export default initDetailRoute


