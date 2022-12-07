import express from 'express'
import webController from "../controllers/webController"

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', webController.getHomePage)
    router.get('/signUp', webController.getSignUpPage)
    router.get('/signIn', webController.getSignInPage)
    router.get('/list', webController.getListPage)
    router.get('/info_form', webController.getInfoFormPage);
    router.get('/info_check', webController.getInfoCheckPage)
    router.get('/history', webController.getHistoryPage)
    router.get('/detail', webController.getDetailPage)

    return app.use('/', router)
}

export default initWebRoute
