import express from 'express'
require('dotenv').config()

import path from 'path'
import { engine } from 'express-handlebars';
import livereload from 'livereload';
import connectLiveReload from 'connect-livereload'

import configViewEngine from './config/viewEngine';
import connectDB from './config/connectDB'

// import initTestRoute from './routes/testRoute';
// import initWebRoute from './routes/webRoute';
// import initUserRoute from './routes/userRoute';
// import initListRoute from './routes/listRoute';
// import initDetailRoute from './routes/detailRoute';

import initRoutes from './routes/routes'

const app = express()
const port = process.env.PORT || 8080

// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, 'views'));
// liveReloadServer.server.once("connection", () => {
//     setTimeout(() => {
//         liveReloadServer.refresh("/");
//     }, 100);
// });

//app.use(connectLiveReload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app, __dirname)

// initTestRoute(app);
// initUserRoute(app)
// initWebRoute(app);
// initDetailRoute(app)
// initListRoute(app)

initRoutes(app)
connectDB();

app.listen(port, () => {
    console.log(`-------------Web is listening on port ${port}------------`)
})