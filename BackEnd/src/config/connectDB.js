import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/test') // Example for postgres

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('-------------Connected!! Connection has been established successfully-------------');
    } catch (error) {
        console.error('!!!!!!!!!Connect Database Failed!! Unable to connect to the database:', error, "!!!!!!!!!");
    }
}

module.exports = connectDB;