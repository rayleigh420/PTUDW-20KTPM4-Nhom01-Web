import db from "../models/index";
import moment from "moment/moment";

let getListPlace = async (province) => {
    return new Promise(async (resolve, reject) => {
        try {
            let places = db.Place.findAll({
                attributes: ['places'],
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

module.exports = {
    getListPlace
}

