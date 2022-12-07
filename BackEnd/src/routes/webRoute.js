import express from 'express'
import webController from "../controllers/webController"

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/list', webController.getListPage)
    router.get('/info_form', webController.getInfoFormPage);
    router.get('/info_check', webController.getInfoCheckPage)

    return app.use('/', router)
}

export default initWebRoute
