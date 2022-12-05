import express from 'express'
require('dotenv').config()
// const expressHbs = require("express-handlebars")
import path from 'path'
import { engine } from 'express-handlebars';
import livereload from 'livereload';
import connectLiveReload from 'connect-livereload'

import configViewEngine from './config/viewEngine';
import initTestRoute from './routes/testRoute';


// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, 'views'));
// liveReloadServer.server.once("connection", () => {
//     setTimeout(() => {
//         liveReloadServer.refresh("/");
//     }, 100);
// });

const app = express()
const port = process.env.PORT || 8080
//app.use(connectLiveReload());

// Get post data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app, __dirname)

// app.engine('hbs', engine({
//     layoutsDir: path.join(__dirname, "resources", "views", "layouts"),
//     partialsDir: path.join(__dirname, "resources", "views", "partials"),
//     defaultLayout: "layout",
//     extname: "hbs",
// }))

// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "resources", "views"))
// app.use(express.static(path.join(__dirname, "resources", "public")));

// app.get("/", (req, res) => {
//     res.render("index", { title: "Jeopardize Contest" });
// });

initTestRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})