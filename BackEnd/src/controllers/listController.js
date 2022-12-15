import listService from "../services/listService"

let getListPage = async (req, res) => {
    try {
        let list = await listService.getTicketInfo(req.query)
        let fromName = await listService.getProvinceName(req.query.from) + " (" + req.query.from + ")"
        let toName = await listService.getProvinceName(req.query.to) + " (" + req.query.to + ")"
        let weekDay = listService.getWeekDay(req.query.date)
        console.log(weekDay)

        res.render("list", {
            style: ["list.css"],
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

