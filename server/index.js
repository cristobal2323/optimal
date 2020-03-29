const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

require("./controllers/config/environment");

/* Routers */
const dashboard = require("./routes/dashboard/");
const login = require("./routes/login/");
const routes = require("./routes/index");

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

app.use("/", routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
