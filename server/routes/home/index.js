const express = require("express");
const homeCtrl = require("../../controllers/home");

const homeAreaTurnos = express.Router();
const homeTortas = express.Router();
const homeTurnosMasRiesgosos = express.Router();
const homeGraph = express.Router();
const homeTable = express.Router();

homeAreaTurnos.get("/:obj", homeCtrl.getAreaTurnos);
homeTortas.post("/", homeCtrl.postTortas);
homeTurnosMasRiesgosos.post("/", homeCtrl.postTurnosMasRiesgos);
homeGraph.post("/", homeCtrl.postGraph);
homeTable.post("/", homeCtrl.postTable);

module.exports = {
  homeAreaTurnos,
  homeTortas,
  homeTurnosMasRiesgosos,
  homeGraph,
  homeTable,
};
