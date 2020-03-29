const express = require("express");
const crudFleetCtrl = require("../../controllers/crud_fleet");

const crudFleet = express.Router();

crudFleet.post("/", crudFleetCtrl.add);
crudFleet.get("/:obj", crudFleetCtrl.get);
crudFleet.delete("/:obj", crudFleetCtrl.deleteItem);
crudFleet.put("/:obj", crudFleetCtrl.updateItem);

module.exports = { crudFleet };
