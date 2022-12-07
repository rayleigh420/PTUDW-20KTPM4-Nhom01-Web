import db from '../models/index';

let getSignUpPage = async (req, res) => {
    try {
        res.render('signUp', {
            style: "css/signUp.css"
        })
    }
    catch (e) {
        console.log(e)
    }
}

let getSignInPage = async (req, res) => {
    try {
        res.render('signIn', {
            style: "css/signIn.css"
        })
    }
    catch (e) {
        console.log(e)
    }
}

let getListPage = async (req, res) => {
    try {
        res.render('list', {
            style: "css/list.css"
        })
    }
    catch (e) {
        console.log(e)
    }
}

let getInfoFormPage = async (req, res) => {
    try {
        res.render('info_form', {
            style: "css/info_form.css"
        })
    } catch (e) {
        console.log(e)
    }
}

let getInfoCheckPage = async (req, res) => {
    try {
        res.render('info_check', {
            style: "css/info_check.css"
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getInfoFormPage, getInfoCheckPage, getListPage, getSignInPage, getSignUpPage
}
