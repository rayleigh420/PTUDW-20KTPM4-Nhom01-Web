import express from 'express'
import webController from "../controllers/webController"
import userController from "../controllers/userController"
import dbController from "../controllers/dbController"

let router = express.Router();

const initListRoute = (app) => {
    router.get('/list', webController.getListPage)

    return app.use('/', router)

}

export default initListRoute

