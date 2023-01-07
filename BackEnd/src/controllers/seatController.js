import seatService from "../services/seatService"

let checkSeat = async (req, res) => {
    try {
        let result = await seatService.checkBlank(req.body)
        console.log("Result: ", result)
        res.json(result)
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    checkSeat
}
