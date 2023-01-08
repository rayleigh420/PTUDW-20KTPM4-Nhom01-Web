import carOwnerService from "../services/carOwnerService"

let getAdminPage = async (req, res) => {
    try {
        let car = await carOwnerService.getAllCarOwner();
        console.log(car);

        res.render("admin", {
            layout: "adminLayout",
            style: ["admin.css"],
            js: ["carOwnerAdmin.js"],
            car: car
        })
    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    getAdminPage
}
