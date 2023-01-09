import carOwnerService from "../services/carOwnerService"
import tripService from "../services/tripService"
import provinceService from "../services/provinceService"

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
            // style: ["admin.css"],
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
        let provinces = await provinceService.getProvince();

        res.render("admin/adminTrip", {
            layout: "adminLayout",
            // style: ["adminCarOwner.css"],
            js: ["tripAdmin.js"],
            trip: trip,
            provinces: provinces
        })
    } catch (e) {
        console.log(e)
    }
}

let updateTrip = async (req, res) => {
    try {
        let result = await tripService.updateTrip(req.params.id, req.body)
        if (result) {
            res.redirect("/admin/adminTrip")
        }
    } catch (e) {
        console.log(e)
    }
}

let deleteTrip = async (req, res) => {
    try {
        let result = await tripService.deleteTrip(req.params.id)
        if (result) {
            res.redirect('/admin/adminTrip')
        }
    } catch (e) {
        console.log(e)
    }
}

let addTrip = async (req, res) => {
    try {
        let result = await tripService.addTrip(req.body)
        if (result) {
            res.redirect("/admin/adminTrip")
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getAdminPage,
    getCarOwnerAdmin, updateCarOwner, deleteCarOwner, addCarOwner,
    getTripAdmin, updateTrip, deleteTrip, addTrip
}
