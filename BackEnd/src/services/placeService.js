import db from "../models/index";
import moment from "moment/moment";

let getListPlace = async (province) => {
    return new Promise(async (resolve, reject) => {
        try {
            let places = db.Place.findAll({
                attributes: ['id', 'places'],
                where: {
                    province: province
                },
                raw: true
            })
            resolve(places)
        } catch (e) {
            console.log(e)
        }
    })
}

let getPlacaNameById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let place = db.Place.findByPk(id, {
                attributes: ['places'],
                raw: true
            })

            resolve(place)
        } catch (e) {

        }
    })
}

module.exports = {
    getListPlace, getPlacaNameById
}

