import db from "../models/index";
import moment from "moment/moment";
import { Sequelize } from "sequelize";

let addCarOwner = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let car = await db.CarOwner.create({
                name: data.name,
                address: data.address,
                phone: data.phone,
                imgLogo: data.imgLogo,
                type: data.type
            })

            if (car) {
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

let getAllCarOwner = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let car = await db.CarOwner.findAll({
                order: [
                    ['id', 'ASC'],
                ],
                raw: true
            })

            resolve(car)
        } catch (e) {
            console.log(e)
        }
    })
}

let getListCarOwner = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let nameOwner = await db.CarOwner.findAll({
                attributes: ['name'],
                raw: true
            })

            console.log(nameOwner)

            resolve(nameOwner)
        } catch (e) {
            console.log(e)
        }
    })
}

let getListTypeCar = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let typeCar = await db.CarOwner.findAll({
                attributes: [
                    [Sequelize.fn('DISTINCT', Sequelize.col('type')), 'type'],
                ],
                raw: true
            })

            console.log(typeCar)

            resolve(typeCar)
        } catch (e) {
            console.log(e)
        }
    })
}

let updateCarOwner = async (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let carOwner = await db.CarOwner.findOne({
                where: {
                    id: id
                },
                raw: true
            })

            let result = await db.CarOwner.upsert({
                id: carOwner.id,
                ...data
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

let deleteCarOwner = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await db.CarOwner.destroy({
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

let checkCarOwner = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let car = await db.CarOwner.findOne({
                where: {
                    name: data.name
                },
                raw: true
            })

            console.log(car)

            if (car) {
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
    getListCarOwner, getListTypeCar, getAllCarOwner, updateCarOwner, deleteCarOwner, addCarOwner, checkCarOwner
};

