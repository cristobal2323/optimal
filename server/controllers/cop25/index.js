const fetch = require("isomorphic-fetch");
const Config = require("../config/index");

async function get(req, res) {
  console.log("Cop 25");
  try {
    console.log(`${Config.apiSystem}/summary/mainindicators`);
    const response = await fetch(
      encodeURI(`${Config.apiSystem}/summary/mainindicators`),
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

module.exports = {
  get
};
