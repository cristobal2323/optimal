const express = require("express");
const loginCtrl = require("../../controllers/login");

const login = express.Router();

login.post("/", loginCtrl.handlePost);

module.exports = { login };
