import userService from "../services/userService"

let getAdminPage = async (req, res) => {
    try {
        res.render("admin", {
            layout: "adminLayout",
            style: ["admin.css"]
        })
    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    getAdminPage
}
