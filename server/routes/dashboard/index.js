const express = require("express");
const dashboardCtrl = require("../../controllers/dashboard");

const dashboard = express.Router();

dashboard.get("/:obj", dashboardCtrl.get);

module.exports = { dashboard };
