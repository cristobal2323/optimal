const express = require("express");
const crudDriverCtrl = require("../../controllers/crud_driver");

const crudDriver = express.Router();

crudDriver.post("/", crudDriverCtrl.add);
crudDriver.get("/:obj", crudDriverCtrl.get);
crudDriver.delete("/:obj", crudDriverCtrl.deleteItem);
crudDriver.put("/:obj", crudDriverCtrl.updateItem);

module.exports = { crudDriver };
