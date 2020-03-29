const fetch = require("isomorphic-fetch");
const Config = require("../config/index");

async function get(req, res) {
  console.log("Cop 25");
  try {
    console.log(`${Config.api}/cop`);
    const response = await fetch(encodeURI(`${Config.api}/cop`), {
      method: "GET",
      headers: new Headers({
        Authorization: `Bearer  ${req.session.token}`,
        accept: "application/json;",
        "Content-Type": "application/json;charset=UTF-8"
      })
    });
    const data = await response.json();
    console.log(data);
    const { status } = response;
    return res.status(status).send(data);
  } catch (error) {
    return res.status(401).send({});
  }
}

module.exports = {
  get
};
