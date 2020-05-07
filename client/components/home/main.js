import React, { useEffect, useRef } from 'react';
import Pie from './pie';
import FilterDate from './filterDate';
import FilterTurno from './filterTurno';

const Main = (props) => {
  const riesgoLaboral = [];
  const evaluacionConductual = [];

  if (!props.loadingTortas) {
    /* Se prepara la data  Aptitud */
    if (props.dataTortas.datos.riesgo_laboral.c1) {
      riesgoLaboral.push({
        name: props.dataTortas.datos.riesgo_laboral.c1.clasificacion,
        value: props.dataTortas.datos.riesgo_laboral.c1.cantidad,
      });
    }
    if (props.dataTortas.datos.riesgo_laboral.c2) {
      riesgoLaboral.push({
        name: props.dataTortas.datos.riesgo_laboral.c2.clasificacion,
        value: props.dataTortas.datos.riesgo_laboral.c2.cantidad,
      });
    }
    if (props.dataTortas.datos.riesgo_laboral.c3) {
      riesgoLaboral.push({
        name: props.dataTortas.datos.riesgo_laboral.c3.clasificacion,
        value: props.dataTortas.datos.riesgo_laboral.c3.cantidad,
      });
    }
    if (props.dataTortas.datos.riesgo_laboral.c4) {
      riesgoLaboral.push({
        name: props.dataTortas.datos.riesgo_laboral.c4.clasificacion,
        value: props.dataTortas.datos.riesgo_laboral.c4.cantidad,
      });
    }
    /* Se prepara la data evaluación conductual */
    if (props.dataTortas.datos.evaluacion_conductual.c1) {
      evaluacionConductual.push({
        name: props.dataTortas.datos.evaluacion_conductual.c1.clasificacion,
        value: props.dataTortas.datos.evaluacion_conductual.c1.cantidad,
      });
    }
    if (props.dataTortas.datos.evaluacion_conductual.c2) {
      evaluacionConductual.push({
        name: props.dataTortas.datos.evaluacion_conductual.c2.clasificacion,
        value: props.dataTortas.datos.evaluacion_conductual.c2.cantidad,
      });
    }
    if (props.dataTortas.datos.evaluacion_conductual.c3) {
      evaluacionConductual.push({
        name: props.dataTortas.datos.evaluacion_conductual.c3.clasificacion,
        value: props.dataTortas.datos.evaluacion_conductual.c3.cantidad,
      });
    }
    if (props.dataTortas.datos.evaluacion_conductual.c4) {
      evaluacionConductual.push({
        name: props.dataTortas.datos.evaluacion_conductual.c4.clasificacion,
        value: props.dataTortas.datos.evaluacion_conductual.c4.cantidad,
      });
    }
  }

  return (
    <React.Fragment>
      <section className="grids--container">
        <div className="grid-1 no-color">
          <div className="grid-button_container justify--normal ">
            <FilterTurno
              handleSelectShifts={props.handleSelectShifts}
              statusAreaTurnos={props.statusAreaTurnos}
              dataAreaTurnos={props.dataAreaTurnos}
              turnos={props.turnos}
            />
            <FilterDate
              handleChangeEnd={props.handleChangeEnd}
              handleChangeStart={props.handleChangeStart}
              typeFilter={props.typeFilter}
              handleTypeFilter={props.handleTypeFilter}
              startDate={props.startDate}
              endDate={props.endDate}
            />
          </div>
        </div>
      </section>
      <section className="grids--container">
        <div className="grid-3">
          {!props.loadingTortas && !props.loadingTurnosMasRiesgosos ? (
            <React.Fragment>
              <div className="grid-title">
                <h2>Riesgo jornada laboral</h2>
                <p>(Cantidad de trabajadores)</p>
              </div>
              <div className="grid-pie">
                <Pie data={riesgoLaboral} />
              </div>
              <div className="grid-simbo">
                <ul>
                  <li className="green">Optimo</li>
                  <li className="yellow">Bajo riesgo</li>
                  <li className="orange">Alerta</li>
                  <li className="red">En riesgo</li>
                </ul>
              </div>
              <div className="grid-title top topX2">
                <h2>Turno más riesgoso</h2>
              </div>
              <div className="grid-text__main">
                <h3>
                  {
                    props.dataTurnosMasRiesgosos.datos
                      .mas_riesgo_aptitud_laboral.area_turno
                  }
                  :{' '}
                  <strong className="red">
                    {
                      props.dataTurnosMasRiesgosos.datos
                        .mas_riesgo_aptitud_laboral.valor
                    }
                    %
                  </strong>
                </h3>
              </div>
            </React.Fragment>
          ) : (
            <div className="grid-loading">
              <h1>
                {' '}
                <i className="fas fa-cog fa-spin"></i>
              </h1>
            </div>
          )}
        </div>
        <div className="grid-3">
          {!props.loadingTortas && !props.loadingTurnosMasRiesgosos ? (
            <React.Fragment>
              <div className="grid-title">
                <h2>Aptitud laboral</h2>
                <p>(Cantidad de trabajadores)</p>
              </div>
              <div className="grid-pie grid-pieScroll">
                <table className="grid-pieTable">
                  <tbody>
                    <tr>
                      <th rowSpan="2" colSpan="2">
                        {' '}
                        Test
                      </th>
                      <th colSpan="4">Indicadores de riesgo</th>
                    </tr>
                    <tr>
                      <th>Optimo</th>
                      <th>Bajo riesgo</th>
                      <th>Alerta</th>
                      <th>En riesgo</th>
                    </tr>
                    <tr>
                      <td colSpan="2">Fit 200</td>
                      <td className="optimo">
                        {
                          props.dataTortas.datos.aptitud_laboral.fit2000.c1
                            .cantidad
                        }
                      </td>
                      <td className="bajoriesgo">
                        {
                          props.dataTortas.datos.aptitud_laboral.fit2000.c2
                            .cantidad
                        }
                      </td>
                      <td className="alerta">
                        {
                          props.dataTortas.datos.aptitud_laboral.fit2000.c3
                            .cantidad
                        }
                      </td>
                      <td className="enriesgo">
                        {
                          props.dataTortas.datos.aptitud_laboral.fit2000.c4
                            .cantidad
                        }
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">Sobereye</td>
                      <td className="optimo-2" colSpan="3">
                        {
                          props.dataTortas.datos.aptitud_laboral.sobereye.c123
                            .cantidad
                        }
                      </td>
                      <td className="enriesgo">
                        {
                          props.dataTortas.datos.aptitud_laboral.sobereye.c4
                            .cantidad
                        }
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">K-test</td>
                      <td className="optimo-3" colSpan="2">
                        {
                          props.dataTortas.datos.aptitud_laboral.ktest.c12
                            .cantidad
                        }
                      </td>
                      <td className="alerta">
                        {
                          props.dataTortas.datos.aptitud_laboral.ktest.c3
                            .cantidad
                        }
                      </td>
                      <td className="enriesgo">
                        {
                          props.dataTortas.datos.aptitud_laboral.ktest.c4
                            .cantidad
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid-simbo">
                <ul>
                  <li className="green">Optimo</li>
                  <li className="yellow">Bajo riesgo</li>
                  <li className="orange">Alerta</li>
                  <li className="red">En riesgo</li>
                </ul>
              </div>
              <div className="grid-title top topX2">
                <h2>Turno más riesgoso</h2>
              </div>
              <div className="grid-text__main">
                <h3>
                  {
                    props.dataTurnosMasRiesgosos.datos
                      .mas_riesgo_aptitud_laboral.area_turno
                  }
                  :{' '}
                  <strong className="red">
                    {
                      props.dataTurnosMasRiesgosos.datos
                        .mas_riesgo_aptitud_laboral.valor
                    }
                    %
                  </strong>
                </h3>
              </div>
            </React.Fragment>
          ) : (
            <div className="grid-loading">
              <h1>
                {' '}
                <i className="fas fa-cog fa-spin"></i>
              </h1>
            </div>
          )}
        </div>
        <div className="grid-3">
          {!props.loadingTortas && !props.loadingTurnosMasRiesgosos ? (
            <React.Fragment>
              <div className="grid-title">
                <h2>Evaluación conductual</h2>
                <p>(Cantidad de trabajadores)</p>
              </div>
              <div className="grid-pie">
                <Pie data={evaluacionConductual} />
              </div>
              <div className="grid-simbo">
                <ul>
                  <li className="green">Optimo</li>
                  <li className="yellow">Bajo riesgo</li>
                  <li className="orange">Alerta</li>
                  <li className="red">En riesgo</li>
                </ul>
              </div>
              <div className="grid-title top topX2">
                <h2>Turno más riesgoso</h2>
              </div>
              <div className="grid-text__main">
                <h3>
                  {
                    props.dataTurnosMasRiesgosos.datos
                      .mas_riesgo_evaluacion_conductual.area_turno
                  }
                  :{' '}
                  <strong className="red">
                    {
                      props.dataTurnosMasRiesgosos.datos
                        .mas_riesgo_evaluacion_conductual.valor
                    }
                    %
                  </strong>
                </h3>
              </div>
            </React.Fragment>
          ) : (
            <div className="grid-loading">
              <h1>
                {' '}
                <i className="fas fa-cog fa-spin"></i>
              </h1>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};
Main.propTypes = {};

export default Main;
