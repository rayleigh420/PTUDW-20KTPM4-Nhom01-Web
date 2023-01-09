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

            trip.forEach(async (item) => {
                item.fromName = await provinceService.getProvinceName(item.from)
                item.toName = await provinceService.getProvinceName(item.to)
            })

            resolve(trip)
        } catch (e) {
            console.log(e)
        }
    })
}

module.exports = {
    getAllTrip
};


