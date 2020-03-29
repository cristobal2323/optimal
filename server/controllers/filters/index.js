const fetch = require("isomorphic-fetch");
const Config = require("../config/index");

async function getDevice(req, res) {
  console.log("Listado devices");
  try {
    console.log(`${Config.apiSystem}/devices`);
    const response = await fetch(encodeURI(`${Config.apiSystem}/devices`), {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${req.session.tokenNew}`,
        accept: "application/json;",
        "Content-Type": "application/json;charset=UTF-8"
      })
    });
    const data = await response.json();

    const { status } = response;
    return res.status(status).send(data);
  } catch (error) {
    return res.status(401).send({});
  }
}

async function getModels(req, res) {
  console.log("Listado models");
  try {
    console.log(`${Config.apiSystem}/vehicles/models`);
    const response = await fetch(
      encodeURI(`${Config.apiSystem}/vehicles/models`),
      {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${req.session.tokenNew}`,
          accept: "application/json;",
          "Content-Type": "application/json;charset=UTF-8"
        })
      }
    );
    const data = await response.json();

    const { status } = response;
    return res.status(status).send(data);
  } catch (error) {
    return res.status(401).send({});
  }
}

async function getTypes(req, res) {
  console.log("Listado types");
  try {
    console.log(`${Config.apiSystem}/vehicles/types`);
    const response = await fetch(
      encodeURI(`${Config.apiSystem}/vehicles/types`),
      {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${req.session.tokenNew}`,
          accept: "application/json;",
          "Content-Type": "application/json;charset=UTF-8"
        })
      }
    );
    const data = await response.json();

    const { status } = response;
    return res.status(status).send(data);
  } catch (error) {
    return res.status(401).send({});
  }
}

async function getFleet(req, res) {
  console.log("Listado fleet");
  try {
    console.log(`${Config.apiSystem}/fleet`);
    const response = await fetch(encodeURI(`${Config.apiSystem}/fleet`), {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${req.session.tokenNew}`,
        accept: "application/json;",
        "Content-Type": "application/json;charset=UTF-8"
      })
    });
    const data = await response.json();

    const { status } = response;
    return res.status(status).send(data);
  } catch (error) {
    return res.status(401).send({});
  }
}

module.exports = {
  getDevice,
  getModels,
  getTypes,
  getFleet
};
