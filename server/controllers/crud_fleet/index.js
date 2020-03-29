const fetch = require("isomorphic-fetch");
const Config = require("../config/index");

async function add(req, res) {
  console.log("Nuevo fleet");
  try {
    console.log(`${Config.apiSystem}/fleet`);
    const response = await fetch(`${Config.apiSystem}/fleet`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${req.session.tokenNew}`,
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(req.body)
    });

    const status = response.status;
    const data = await response.json();
    return res.status(status).send(data);
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: "Problem API" });
  }
}

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("Listado fleet");
  try {
    let id = "";
    if (obj.id) {
      id = `/id/${obj.id}`;
    }

    let state = "";
    if (obj.state === "1") {
      state = `&state=${obj.state}`;
    } else if (obj.state === "0") {
      state = `&state=${obj.state}`;
    }

    let sort = "";
    if (obj.sort) {
      if (obj.sort.column !== "") {
        let direction = obj.sort.direction === "asc" ? "" : "-";
        sort = `&sort=${direction}${obj.sort.column}`;
      }
    }

    console.log(
      `${Config.apiSystem}/fleet${id}?pageSize=18&page=${obj.pag}&search=${obj.search}${state}${sort}`
    );

    const response = await fetch(
      encodeURI(
        `${Config.apiSystem}/fleet${id}?pageSize=18&page=${obj.pag}&search=${obj.search}${state}${sort}`
      ),
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

async function deleteItem(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("Eliminar fleet");
  try {
    console.log(`${Config.apiSystem}/fleet/${obj.id}`);
    const response = await fetch(`${Config.apiSystem}/fleet/${obj.id}`, {
      method: "DELETE",
      headers: new Headers({
        Authorization: `Bearer ${req.session.tokenNew}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    });
    const status = response.status;
    let data = await response.json();
    return res.status(status).send(data);
  } catch (err) {
    console.log(err, "No conectado");
    return res.status(401).send({ message: "Problem API" });
  }
}

async function updateItem(req, res) {
  const obj = JSON.parse(req.params.obj);
  console.log("actualizar fleet");
  try {
    console.log(`${Config.apiSystem}/fleet`);
    const response = await fetch(`${Config.apiSystem}/fleet`, {
      method: "PUT",
      headers: new Headers({
        Authorization: `Bearer ${req.session.tokenNew}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      }),
      body: JSON.stringify(req.body)
    });
    const status = response.status;
    let data = await response.json();
    console.log(data, req.body);
    return res.status(status).send(data);
  } catch (err) {
    console.log(err, "No conectado");
    return res.status(401).send({ message: "Problem API" });
  }
}

module.exports = {
  add,
  get,
  deleteItem,
  updateItem
};
