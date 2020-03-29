const express = require("express");
const cop25Ctrl = require("../../controllers/cop25");

const cop25 = express.Router();

cop25.get("/:obj", cop25Ctrl.get);

module.exports = { cop25 };
