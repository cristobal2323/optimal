const fetch = require("isomorphic-fetch");
const Config = require("../config/index");

async function get(req, res) {
  try {
    const objs = {};
    return res.status(200).send(objs);
  } catch (error) {
    return res.status(401).send({});
  }
}

module.exports = {
  get,
};
