import ticketService from "../services/ticketService"

let getListPage = async (req, res) => {
    try {
        let list = await ticketService.getTicketInfo(req.query)
        let fromName = await ticketService.getProvinceName(req.query.from) + " (" + req.query.from + ")"
        let toName = await ticketService.getProvinceName(req.query.to) + " (" + req.query.to + ")"
        let weekDay = ticketService.getWeekDay(req.query.date)
        console.log("list", list)

        res.render("list", {
            style: ["list.css"],
            js: ["navigation.js"],
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

