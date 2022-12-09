import express from 'express'
import webController from "../controllers/webController"
import userController from "../controllers/userController"
import dbController from "../controllers/dbController"

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

    router.post('/signUp', userController.signUp)
    router.post('/signIn', userController.signIn)

    router.get('/createTable', dbController.createTable)

    return app.use('/', router)

}

export default initWebRoute
