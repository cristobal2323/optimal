const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

require("./controllers/config/environment");

/* Routers */
const dashboard = require("./routes/dashboard/");
const indicators = require("./routes/indicators/");
const login = require("./routes/login/");
const routes = require("./routes/index");
const mapa = require("./routes/mapa/");
const cop25 = require("./routes/cop25/");
const cop25Reina = require("./routes/cop25_reina/");
const crudVehicle = require("./routes/crud_vehicle/");
const crudDriver = require("./routes/crud_driver/");
const crudDevice = require("./routes/crud_device/");
const crudCharger = require("./routes/crud_charger/");
const crudFleet = require("./routes/crud_fleet/");

const filter = require("./routes/filters/");

const assetFolder = path.resolve(__dirname, "../dist/");
const port = process.env.PORT;
const app = express();

app.use(express.static(assetFolder));
app.use(bodyParser.json());

app.use(
  cookieSession({
    name: "session",
    keys: ["llave-1"]
  })
);

/* Login */
app.use("/api/login", login.login);

/* Dashboard  */
app.use("/api/dashboard", dashboard.dashboard);

/* indicators */
app.use("/api/indicators", indicators.indicators);

/* mapa */
app.use("/api/mapa", mapa.mapa);
app.use("/api/mapaGetVehicle", mapa.mapaGetVehicle);
app.use("/api/mapaGetDevice", mapa.mapaGetDevice);
app.use("/api/mapaGetGraphVehicle", mapa.mapaGetGraphVehicle);

/* cop25 */
app.use("/api/cop25", cop25.cop25);

/* cop25 Reina */
app.use("/api/cop25Reina", cop25Reina.cop25Reina);

/* crud vehicle */
app.use("/api/crudVehicle", crudVehicle.crudVehicle);

/* crud driver */
app.use("/api/crudDriver", crudDriver.crudDriver);

/* crud device */
app.use("/api/crudDevice", crudDevice.crudDevice);

/* crud device */
app.use("/api/crudCharger", crudCharger.crudCharger);

/* crud fleet */
app.use("/api/crudFleet", crudFleet.crudFleet);

/* filter */
app.use("/api/filterDevice", filter.filterDevice);
app.use("/api/filterTypes", filter.filterTypes);
app.use("/api/filterModels", filter.filterModels);
app.use("/api/filterFleet", filter.filterFleet);

app.use("/", routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
