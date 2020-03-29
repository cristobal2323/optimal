const express = require("express");
const crudDeviceCtrl = require("../../controllers/crud_device");

const crudDevice = express.Router();

crudDevice.post("/", crudDeviceCtrl.add);
crudDevice.get("/:obj", crudDeviceCtrl.get);
crudDevice.delete("/:obj", crudDeviceCtrl.deleteItem);
crudDevice.put("/:obj", crudDeviceCtrl.updateItem);

module.exports = { crudDevice };
