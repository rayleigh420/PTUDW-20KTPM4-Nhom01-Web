import initWebRoute from './webRoute';
import initUserRoute from './userRoute';
import initListRoute from './listRoute';
import initDetailRoute from './detailRoute';

let initRoutes = (app) => {
    initUserRoute(app)
    initWebRoute(app);
    initDetailRoute(app)
    initListRoute(app)
}

export default initRoutes