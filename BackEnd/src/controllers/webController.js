import db from '../models/index';

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
    getInfoFormPage, getInfoCheckPage, getListPage
}
