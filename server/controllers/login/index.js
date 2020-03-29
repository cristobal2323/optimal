const fetch = require("isomorphic-fetch");
const Config = require("../config/index");
const FormData = require("form-data");
const base64 = require("base-64");

async function handlePost(req, res) {
  try {
    /* nuevo login */

    const formData = new FormData();
    formData.append("username", req.body.correo);
    formData.append("password", req.body.clave);
    formData.append("grant_type", "password");

    const base = base64.encode(Config.user + ":" + Config.pass);
    const response = await fetch(`${Config.apiSystem}/oauth/token`, {
      method: "POST",
      headers: new Headers({
        Authorization: `Basic ${base}`,
        credentials: "include"
      }),
      body: formData
    });

    const status = response.status;
    const data = await response.json();
    req.session.tokenNew = data.access_token;
    console.log(data);
    return res.status(status).send(data);
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: "Problem API" });
  }
}

module.exports = {
  handlePost
};
