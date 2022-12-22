import db from "../models/index";
import moment from "moment/moment";

let getRates = (idTicket) => {
    return new Promise(async (resolve, reject) => {
        try {
            let items = await db.Ticket.findByPk(idTicket, {
                raw: true,
            });
            let Rates = await db.Rate.findAll({
                where: { idCarOwner: items["idCarOwner"] },
                raw: true,
            });
            let stars = 0;
            Rates.forEach(async (rate) => {
                stars += rate.star;
                let usname = await db.User.findOne({
                    attributes: ["name"],
                    where: { id: rate["idUser"] },
                    raw: true,
                });
                rate.username = usname["name"];
            });
            let star = (stars * 1.0) / Rates.length;

            resolve({
                stars: star,
                rates: Rates
            })

        } catch (e) {
            console.log(e)
        }
    })
}

module.exports = {
    getRates
};


