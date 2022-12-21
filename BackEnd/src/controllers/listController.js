import ticketService from "../services/ticketService"
import carOwnerService from "../services/carOwnerService"

let getListPage = async (req, res) => {
    try {
        let list = await ticketService.getTicketInfo(req.query)
        let fromName = await ticketService.getProvinceName(req.query.from) + " (" + req.query.from + ")"
        let toName = await ticketService.getProvinceName(req.query.to) + " (" + req.query.to + ")"
        let weekDay = ticketService.getWeekDay(req.query.date)
        let nameCar = await carOwnerService.getListCarOwner()
        let typeCar = await carOwnerService.getListTypeCar()

        res.render("list", {
            style: ["list.css"],
            js: ["navigation.js", "list.js"],
            carOwner: nameCar,
            typeCar: typeCar,
            list: list,
            fromName: fromName,
            toName: toName,
            weekDay: weekDay
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getListPage,
};

