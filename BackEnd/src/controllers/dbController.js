import db from '../models/index'

let createTable = async (req, res) => {
    db.sequelize.sync({
        force: true
    }).then(() => {
        res.send("Success!")
    })
}

module.exports = {
    createTable
}