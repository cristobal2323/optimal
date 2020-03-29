const express = require("express");
const eventCtrl = require("../../controllers/event");

const event = express.Router();

event.post("/", eventCtrl.add);
event.get("/:obj", eventCtrl.get);
event.delete("/:obj", eventCtrl.deleteItem);
event.put("/:obj", eventCtrl.updateItem);

module.exports = { event };
