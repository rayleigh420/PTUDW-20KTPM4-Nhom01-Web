import carOwnerService from "../services/carOwnerService"
import tripService from "../services/tripService"
import provinceService from "../services/provinceService"

let checkTrip = async (req, res) => {
    try {
        let result = await tripService.checkTrip(req.body)
        res.json(result)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    checkTrip
}

