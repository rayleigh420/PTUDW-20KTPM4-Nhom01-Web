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

let checkTrip = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let trip = await db.Trip.findOne({
                where: {
                    from: data.from,
                    to: data.to
                },
                raw: true
            })

            console.log(trip)

            if (trip) {
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

let addTrip = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let trip = await db.Trip.create({
                from: data.from,
                to: data.to
            })

            console.log(trip)

            if (trip) {
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

let deleteTrip = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await db.Trip.destroy({
                where: {
                    id: id
                },
                cascade: true,
                raw: true
            })

            console.log(result)

            if (result > 0) {
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
    getAllTrip, updateTrip, checkTrip, addTrip, deleteTrip
};


