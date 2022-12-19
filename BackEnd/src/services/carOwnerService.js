import db from "../models/index";
import moment from "moment/moment";

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

module.exports = {
    getListCarOwner
};

