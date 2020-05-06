const express = require("express");
const homeCtrl = require("../../controllers/home");

const homeAreaTurnos = express.Router();

homeAreaTurnos.get("/:obj", homeCtrl.getAreaTurnos);

module.exports = { homeAreaTurnos };
