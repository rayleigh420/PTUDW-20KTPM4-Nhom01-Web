import db from "../models/index";
import moment from "moment/moment";
import { Sequelize } from "sequelize";

let getProvince = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let provinces = await db.Province.findAll({
                raw: true
            })
            resolve(provinces)
        } catch (e) {
            console.log(e)
        }
    })
}

module.exports = {
    getProvince
}
