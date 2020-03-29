const fetch = require("isomorphic-fetch");
const moment = require("moment");

async function get(req, res) {
  const obj = JSON.parse(req.params.obj);
  try {
    const objs = {};

    /* Listado de medidores  */
    const responseMedidor = await fetch(
      encodeURI("https://gateway.antufleet.com/puntoCarga"),
      {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer  ${req.session.token}`,
          accept: "application/json;",
          "Content-Type": "application/json;charset=UTF-8"
        })
      }
    );
    const dataMedidor = await responseMedidor.json();
    const statusMedidor = responseMedidor.status;

    /* Datos Vistas  */
    let start = null;
    let end = null;
    if (obj.date) {
      const arrStart = obj.date.start.split("-");
      start = `${moment(`${arrStart[2]}-${arrStart[1]}-${arrStart[0]}`).format(
        "YYYY-MM-DD"
      )} 00:00:00`;
      const arrEnd = obj.date.end.split("-");
      end = `${moment(`${arrEnd[2]}-${arrEnd[1]}-${arrEnd[0]}`).format(
        "YYYY-MM-DD"
      )} 23:59:59`;
    }

    const punto =
      obj.puntoCarga !== null ? obj.puntoCarga : dataMedidor.data[0].id;

    const type = obj.type ? obj.type : "";
    console.log(
      `https://gateway.antufleet.com/logCalculoConsumo?fechaInicial=${start}&fechaFinal=${end}&type=${type}&id_punto_carga=${punto}`
    );
    console.log(obj, punto);
    const response = await fetch(
      encodeURI(
        `https://gateway.antufleet.com/logCalculoConsumo?fechaInicial=${start}&fechaFinal=${end}&type=${type}&id_punto_carga=${punto}`
      ),
      {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${req.session.token}`,
          accept: "application/json;",
          "Content-Type": "application/json;charset=UTF-8"
        })
      }
    );
    const data = await response.json();

    objs.medidores = dataMedidor;
    objs.indicadores = data;
    const { status } = response;
    return res.status(status).send(objs);
  } catch (error) {
    return res.status(401).send({});
  }
}

module.exports = {
  get
};
