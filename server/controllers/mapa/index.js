const fetch = require("isomorphic-fetch");
const Config = require("../config/index");

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);

  console.log("Listado Mapa");
  try {
    let query;

    let sort = "";
    if (obj.sort) {
      if (obj.sort.column !== "") {
        let direction = obj.sort.direction === "asc" ? "" : "-";
        sort = `&sort=${direction}${obj.sort.column}`;
      }
    }

    let search = "";
    if (obj.search !== "") {
      search = `&search=${obj.search}`;
    }

    if (obj.type === "vehiculo") {
      query = `${Config.apiSystem}/vehicles/states?pageSize=${obj.pag.sum}&page=${obj.pag.main}${sort}${search}`;
    }

    if (obj.type === "cargadores") {
      query = `${Config.apiSystem}/charger?pageSize=${obj.pag.sum}&page=${obj.pag.main}${sort}${search}`;
    }

    if (obj.type === "conductores") {
      query = `${Config.apiSystem}/drivers?pageSize=${obj.pag.sum}&page=${obj.pag.main}${sort}${search}`;
    }

    console.log(query, req.session.tokenNew);

    const response = await fetch(encodeURI(query), {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer ${req.session.tokenNew}`,
        accept: "application/json;",
        "Content-Type": "application/json;charset=UTF-8"
      })
    });

    const data = await response.json();

    if (obj.type === "vehiculo") {
      const response1 = await fetch(
        encodeURI(
          `${Config.apiSystem}/vehicles/states/count?pageSize=${obj.pag.sum}&page=${obj.pag.main}${search}`
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
      const data1 = await response1.json();
      data.count = data1.response.pagesCount;
    }

    data.type = obj.type;
    const { status } = response;
    return res.status(status).send(data);
  } catch (error) {
    console.log(error);
    return res.status(401).send({});
  }
}

async function getVehicle(req, res) {
  try {
    const obj = JSON.parse(req.params.obj);
    console.log(`${Config.apiSystem}/vehicles/states`);
    const response = await fetch(
      encodeURI(`${Config.apiSystem}/vehicles/states`),
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
    console.log(error);
    return res.status(401).send({});
  }
}

async function getDevice(req, res) {
  try {
    const obj = JSON.parse(req.params.obj);
    console.log(`${Config.apiSystem}/charger`);
    const response = await fetch(encodeURI(`${Config.apiSystem}/charger`), {
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
    console.log(error);
    return res.status(401).send({});
  }
}

async function getGraphVehicle(req, res) {
  try {
    const obj = JSON.parse(req.params.obj);
    console.log(`${Config.apiSystem}/vehicles/battery/${obj.code}`);
    const response = await fetch(
      encodeURI(`${Config.apiSystem}/vehicles/battery/${obj.code}`),
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
    console.log(error);
    return res.status(401).send({});
  }
}

module.exports = {
  get,
  getVehicle,
  getDevice,
  getGraphVehicle
};
