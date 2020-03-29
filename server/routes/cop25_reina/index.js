const express = require("express");
const cop25ReinaCtrl = require("../../controllers/cop25_reina");

const cop25Reina = express.Router();

cop25Reina.get("/:obj", cop25ReinaCtrl.get);

module.exports = { cop25Reina };
