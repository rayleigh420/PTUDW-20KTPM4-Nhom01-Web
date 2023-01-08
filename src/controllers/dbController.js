import db from '../models/index'

let createTable = async (req, res) => {
    db.sequelize.sync({
        force: true,
        logging: false
    }).then(() => {
        res.send("Success!")
    })
}

module.exports = {
    createTable
}