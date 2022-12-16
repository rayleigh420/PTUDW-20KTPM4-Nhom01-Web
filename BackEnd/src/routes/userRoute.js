import express from 'express'
import webController from "../controllers/webController"
import userController from "../controllers/userController"
import dbController from "../controllers/dbController"

let router = express.Router();

const initUserRoute = (app) => {
    router.post('/signin', userController.apiSignIn)
    router.post('/signUp', userController.apiSignUp)

    return app.use('/user', router)

}

export default initUserRoute

