import initAdminRoute from "./adminRoute";
import initAdminAPIRoute from "./adminAPIRoute"
import initWebRoute from "./webRoute";
import initUserRoute from "./userRoute";
import initListRoute from "./listRoute";
import initDetailRoute from "./detailRoute";
import initMailRoute from "./sengridRoute";
import initHistoryRoute from "./historyRoute";
import initSeatRoute from "./seatRoute";

let initRoutes = (app) => {
    initAdminRoute(app);
    initAdminAPIRoute(app);
    initSeatRoute(app);
    initUserRoute(app);
    initWebRoute(app);
    initDetailRoute(app);
    initListRoute(app);
    initMailRoute(app);
    initHistoryRoute(app);
};

export default initRoutes;
