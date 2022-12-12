import listService from "../services/listService"

let getListPage = async (req, res) => {
    try {
        let list = await listService.getTicketInfo(req.query)
        res.locals.list = list;
        res.render("list", {
            style: "css/list.css",
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getListPage,
};

