const fetch = require("isomorphic-fetch");
const Config = require("../config/index");

async function getAreaTurnos(req, res) {
  console.log("Listado area turnos");
  try {
    console.log(`${Config.apiSystem}/atscli.json?cliente_id=1`);
    const response = await fetch(
      encodeURI(`${Config.apiSystem}/atscli.json?cliente_id=1`),
      {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${req.session.token}`,
          accept: "application/json;",
          "Content-Type": "application/json;charset=UTF-8",
        }),
      }
    );
    const data = await response.json();
    const { status } = response;
    return res.status(status).send(data);
  } catch (error) {
    return res.status(401).send({});
  }
}

async function postTortas(req, res) {
  console.log("Listado area turnos");
  try {
    console.log(`${Config.apiSystem}/rijo24.json`);
    const response = await fetch(`${Config.apiSystem}/rijo24.json`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${req.session.token}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(req.body),
    });

    const status = response.status;
    const data = await response.json();
    return res.status(status).send(data);
  } catch (error) {
    return res.status(401).send({});
  }
}

async function postTurnosMasRiesgos(req, res) {
  console.log("Listado turnos mas riesgosos");
  try {
    console.log(`${Config.apiSystem}/masrie.json`);
    const response = await fetch(`${Config.apiSystem}/masrie.json`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${req.session.token}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(req.body),
    });

    const status = response.status;
    const data = await response.json();
    return res.status(status).send(data);
  } catch (error) {
    return res.status(401).send({});
  }
}

async function postGraph(req, res) {
  console.log("Listado graph");
  try {
    console.log(`${Config.apiSystem}/rdia.json`);
    const response = await fetch(`${Config.apiSystem}/rdia.json`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${req.session.token}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(req.body),
    });

    const status = response.status;
    const data = await response.json();
    return res.status(status).send(data);
  } catch (error) {
    return res.status(401).send({});
  }
}

async function postTable(req, res) {
  console.log("Listado Table", req.body);
  try {
    console.log(`${Config.apiSystem}/pries.json`);
    const response = await fetch(`${Config.apiSystem}/pries.json`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${req.session.token}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(req.body),
    });

    const status = response.status;
    const data = await response.json();
    return res.status(status).send(data);
  } catch (error) {
    return res.status(401).send({});
  }
}

module.exports = {
  getAreaTurnos,
  postTurnosMasRiesgos,
  postTortas,
  postGraph,
  postTable,
};
