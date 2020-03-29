const express = require("express");
const filterCtrl = require("../../controllers/filters");

const filterDevice = express.Router();
const filterModels = express.Router();
const filterTypes = express.Router();
const filterFleet = express.Router();

filterDevice.get("/:obj", filterCtrl.getDevice);
filterModels.get("/:obj", filterCtrl.getModels);
filterTypes.get("/:obj", filterCtrl.getTypes);
filterFleet.get("/:obj", filterCtrl.getFleet);

module.exports = { filterDevice, filterModels, filterTypes, filterFleet };
