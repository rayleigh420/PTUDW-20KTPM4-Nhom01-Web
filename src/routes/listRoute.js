import express from 'express'
import listController from '../controllers/listController'

let router = express.Router();

const initListRoute = (app) => {
    router.get('/list', listController.getListPage)

    return app.use('/', router)

}

export default initListRoute

