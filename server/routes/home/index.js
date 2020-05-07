const express = require("express");
const homeCtrl = require("../../controllers/home");

const homeAreaTurnos = express.Router();
const homeTortas = express.Router();
const homeTurnosMasRiesgosos = express.Router();

homeAreaTurnos.get("/:obj", homeCtrl.getAreaTurnos);
homeTortas.post("/", homeCtrl.postTortas);
homeTurnosMasRiesgosos.post("/", homeCtrl.postTurnosMasRiesgos);

module.exports = { homeAreaTurnos, homeTortas, homeTurnosMasRiesgosos };
