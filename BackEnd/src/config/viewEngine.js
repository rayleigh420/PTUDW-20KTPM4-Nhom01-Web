import express from "express";
import path from "path";
import { engine } from "express-handlebars";
// import helper from "./helper";
const helper = require("../controllers/helper");

const configViewEngine = (app, pathName) => {
  app.engine("hbs", engine({
    layoutsDir: path.join(pathName, "resources", "views", "layouts"),
    partialsDir: path.join(pathName, "resources", "views", "partials"),
    defaultLayout: "layout",
    helpers: {
      generateTypeOfCar: helper.generateTypeOfCar,
      generateStarList: helper.generateStarList,
    },
    extname: "hbs",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
    },
  })
  );

  app.set("view engine", "hbs");
  app.set("views", path.join(pathName, "resources", "views"));
  app.use(express.static(path.join(pathName, "resources", "public")));
};

export default configViewEngine;
