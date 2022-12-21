import db from "../models/index";
import moment from "moment/moment";
import { Sequelize } from "sequelize";

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

module.exports = {
    getListCarOwner, getListTypeCar
};

