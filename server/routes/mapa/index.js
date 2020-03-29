const express = require("express");
const mapaCtrl = require("../../controllers/mapa");

const mapa = express.Router();
const mapaGetVehicle = express.Router();
const mapaGetDevice = express.Router();
const mapaGetGraphVehicle = express.Router();

mapa.get("/:obj", mapaCtrl.get);
mapaGetVehicle.get("/:obj", mapaCtrl.getVehicle);
mapaGetDevice.get("/:obj", mapaCtrl.getDevice);
mapaGetGraphVehicle.get("/:obj", mapaCtrl.getGraphVehicle);

module.exports = { mapa, mapaGetVehicle, mapaGetDevice, mapaGetGraphVehicle };
