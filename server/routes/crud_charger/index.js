const express = require("express");
const crudChargerCtrl = require("../../controllers/crud_charger");

const crudCharger = express.Router();

crudCharger.post("/", crudChargerCtrl.add);
crudCharger.get("/:obj", crudChargerCtrl.get);
crudCharger.delete("/:obj", crudChargerCtrl.deleteItem);
crudCharger.put("/:obj", crudChargerCtrl.updateItem);

module.exports = { crudCharger };
