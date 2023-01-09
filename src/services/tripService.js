import db from "../models/index";
import provinceService from "../services/provinceService"

let getAllTrip = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let trip = await db.Trip.findAll({
                order: [
                    ['id', 'ASC'],
                ],
                raw: true
            })

            let provinces = await provinceService.getProvince();

            trip.forEach(async (item) => {
                item.fromName = await provinceService.getProvinceName(item.from)
                item.toName = await provinceService.getProvinceName(item.to)
                item.provinces = provinces
            })

            resolve(trip)
        } catch (e) {
            console.log(e)
        }
    })
}

let updateTrip = async (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let trip = await db.Trip.findOne({
                where: {
                    id: id
                },
                raw: true
            })

            let result = await db.Trip.upsert({
                id: trip.id,
                from: data.from,
                to: data.to
            });

            if (result) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (e) {
            console.log(e)
        }
    })
}

module.exports = {
    getAllTrip, updateTrip
};


