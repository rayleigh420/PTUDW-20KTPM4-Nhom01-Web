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
            let place = await db.Place.findOne({
                attributes: ['places'],
                where: {
                    id: id,
                },
                raw: true
            })
            resolve(place.places)
        } catch (e) {

        }
    })
}

let getIDByPlace = async (place) => {
    return new Promise(async (resolve, reject) => {
        try {
            let id = await db.Place.findOne({
                attributes: ['id'],
                where: {
                    places: place,
                },
                raw: true
            })
            resolve(id.id)
        } catch (e) {

        }
    })
}

module.exports = {
    getListPlace, getPlacaNameById, getIDByPlace
}

