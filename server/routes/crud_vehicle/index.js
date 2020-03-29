const express = require("express");
const crudVehicleCtrl = require("../../controllers/crud_vehicle");

const crudVehicle = express.Router();

crudVehicle.post("/", crudVehicleCtrl.add);
crudVehicle.get("/:obj", crudVehicleCtrl.get);
crudVehicle.delete("/:obj", crudVehicleCtrl.deleteItem);
crudVehicle.put("/:obj", crudVehicleCtrl.updateItem);

module.exports = { crudVehicle };
