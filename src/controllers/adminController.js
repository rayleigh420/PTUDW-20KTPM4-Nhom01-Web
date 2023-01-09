import carOwnerService from "../services/carOwnerService"
import tripService from "../services/tripService"

let getAdminPage = async (req, res) => {
    try {
        res.render("admin", {
            layout: "adminLayout",
            style: ["admin.css"],
            // js: ["carOwnerAdmin.js"],
        })
    } catch (e) {
        console.log(e);
    }
}

let getCarOwnerAdmin = async (req, res) => {
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

let getTripAdmin = async (req, res) => {
    try {
        let trip = await tripService.getAllTrip();
        console.log(trip);

        res.render("admin/adminTrip", {
            layout: "adminLayout",
            // style: ["adminCarOwner.css"],
            // js: ["carOwnerAdmin.js"],
            trip: trip
        })
    } catch (e) {
        console.log(e)
    }
}


module.exports = {
    getAdminPage,
    getCarOwnerAdmin, updateCarOwner, deleteCarOwner, addCarOwner,
    getTripAdmin
}
