const fetch = require("isomorphic-fetch");
const Config = require("../config/index");

async function handlePost(req, res) {
  try {
    /* Variable */
    let data = {};
    let data1 = {};
    let data2 = {};

    /* Login */
    const response = await fetch(
      `${Config.apiSystem}/authenticate?email=${req.body.correo}&password=${req.body.clave}`,
      {
        method: "POST",
      }
    );
    const status = response.status;
    data = await response.json();
    /* End Api Login */

    if (status === 200) {
      /* User */
      const response1 = await fetch(
        `${Config.apiSystem}/user.json?email=${req.body.correo}`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: `Bearer ${data.auth_token}`,
            accept: "application/json;",
            "Content-Type": "application/json;charset=UTF-8",
          }),
        }
      );
      const status1 = response1.status;
      data1 = await response1.json();
      /* End APi User */

      /* Client */
      const response2 = await fetch(
        `${Config.apiSystem}/cliente.json?cliente_id=${data.cliente_id}`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: `Bearer ${data.auth_token}`,
            accept: "application/json;",
            "Content-Type": "application/json;charset=UTF-8",
          }),
        }
      );
      const status2 = response2.status;
      data2 = await response2.json();
      /* End APi Client */
    }

    /*  Data se prepara para ser enviado al Front */
    const dataGeneral = {
      login: data,
      user: data1,
      client: data2,
    };

    /* Se controla las sesiones */
    req.session.token = data.auth_token;
    req.session.cliente_id = data.cliente_id;

    return res.status(status).send(dataGeneral);
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: "Problem API" });
  }
}

module.exports = {
  handlePost,
};
