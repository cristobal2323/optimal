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
    console.log(`${Config.apiSystem}/drivers`);
    const response = await fetch(`${Config.apiSystem}/rijo24.json`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${req.session.tokenNew}`,
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
  postTortas,
};
