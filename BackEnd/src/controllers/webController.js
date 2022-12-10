import db from '../models/index';

let getHomePage = async (req, res) => {
    try {
        res.render('home', {
            style: "css/home.css",
            js: "js/navigation.js"
        })
    }
    catch (e) {
        console.log(e)
    }
}

let getSignUpPage = async (req, res) => {
    try {
        res.render('signUp', {
            style: "css/signUp.css",
            js: ['js/signUp.js']
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

let getHistoryPage = async (req, res) => {
    try {
        res.render('history', {
            style: "css/history.css"
        })
    } catch (e) {
        console.log(e)
    }
}

let getDetailPage = async (req, res) => {
    try {
        res.render('detail', {
            style: "css/detail.css",
            js: "js/detail.js"
        })
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getHomePage, getInfoFormPage, getInfoCheckPage, getListPage, getSignInPage, getSignUpPage, getHistoryPage, getDetailPage
}
