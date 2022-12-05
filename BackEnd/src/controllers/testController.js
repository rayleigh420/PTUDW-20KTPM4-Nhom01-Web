import db from '../models/index';

let test = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data);
        res.render('index')
    } catch (e) {
        console.log(e)
    }
    //res.send("Hello Word!");
}

module.exports = {
    test
}