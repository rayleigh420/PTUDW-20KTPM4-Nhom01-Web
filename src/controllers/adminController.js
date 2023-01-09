import carOwnerService from "../services/carOwnerService"

let getAdminPage = async (req, res) => {
    try {
        let car = await carOwnerService.getAllCarOwner();
        console.log(car);

        res.render("admin/adminCarOwner", {
            layout: "adminLayout",
            style: ["admin.css"],
            js: ["carOwnerAdmin.js"],
            car: car
        })
    } catch (e) {
        console.log(e);
    }
}

let addCarOwner = async (req, res) => {
    try {
        let result = await carOwnerService.addCarOwner(req.body)
        if (result) {
            res.redirect("/admin/adminCarOwner")
        }
    } catch (e) {
        console.log(e)
    }
}

let updateCarOwner = async (req, res) => {
    try {
        let result = await carOwnerService.updateCarOwner(req.params.id, req.body)
        if (result) {
            res.redirect("/admin/adminCarOwner")
        }
    } catch (e) {
        console.log(e)
    }
}

let deleteCarOwner = async (req, res) => {
    try {
        let result = await carOwnerService.deleteCarOwner(req.params.id)
        if (result) {
            res.redirect('/admin/adminCarOwner')
        }
    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    getAdminPage, updateCarOwner, deleteCarOwner, addCarOwner
}
