const express = require("express");
const indicatorsCtrl = require("../../controllers/indicators");

const indicators = express.Router();

indicators.get("/:obj", indicatorsCtrl.get);

module.exports = { indicators };
