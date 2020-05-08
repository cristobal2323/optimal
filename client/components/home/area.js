import React, { useEffect, useState, useRef } from 'react';
import AreaGraph from './areaGraph';

const Area = (props) => {
  return (
    <React.Fragment>
      <section className="grids--container top bottom">
        <div className="grid-1">
          {!props.loadingGraph ? (
            <React.Fragment>
              <div className="grid-button_container">
                <div className="grid-button">
                  <ul>
                    <li
                      data-name="riesgo"
                      onClick={props.handleFilter}
                      className={props.riesgo ? 'active' : ''}
                    >
                      Riesgo jornada laboral
                    </li>
                    <li
                      data-name="fit2000"
                      onClick={props.handleFilter}
                      className={props.fit2000 ? 'active' : ''}
                    >
                      Fit 2000
                    </li>
                    <li
                      data-name="sobereye"
                      onClick={props.handleFilter}
                      className={props.sobereye ? 'active' : ''}
                    >
                      Sobereye
                    </li>
                    <li
                      data-name="ktest"
                      onClick={props.handleFilter}
                      className={props.ktest ? 'active' : ''}
                    >
                      K-test
                    </li>
                    <li
                      data-name="conducta"
                      onClick={props.handleFilter}
                      className={props.conducta ? 'active' : ''}
                    >
                      Modelo conducta
                    </li>
                  </ul>
                </div>
                <div className="grid-button">
                  <ul>
                    <li
                      data-name="optimo"
                      onClick={props.handleFilter}
                      className={props.optimo ? 'active optimo' : ''}
                    >
                      Optimo
                    </li>
                    <li
                      data-name="bajoRiesgo"
                      onClick={props.handleFilter}
                      className={props.bajoRiesgo ? 'active bajoriesgo' : ''}
                    >
                      Bajo riesgo
                    </li>
                    <li
                      data-name="alerta"
                      onClick={props.handleFilter}
                      className={props.alerta ? 'active alerta' : ''}
                    >
                      Alerta
                    </li>
                    <li
                      data-name="enriesgo"
                      onClick={props.handleFilter}
                      className={props.enriesgo ? 'active enriesgo' : ''}
                    >
                      En riesgo
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid-title top">
                <h2>Comportamiento por semana</h2>
              </div>
              <div className="grid-pie">
                <AreaGraph
                  data={props.dataGraph}
                  fit2000={props.fit2000}
                  ktest={props.ktest}
                  sobereye={props.sobereye}
                  riesgo={props.riesgo}
                  conducta={props.conducta}
                  optimo={props.optimo}
                  enriesgo={props.enriesgo}
                  alerta={props.alerta}
                  bajoRiesgo={props.bajoRiesgo}
                />
              </div>
              <div className="grid-simbo top">
                <ul>
                  {props.riesgo && props.optimo && (
                    <li className="riesgo-optimo">
                      Riesgo jornada laboral Optimo
                    </li>
                  )}
                  {props.riesgo && props.alerta && (
                    <li className="riesgo-bajoriesgo">
                      Riesgo jornada laboral Bajo riesgo
                    </li>
                  )}
                  {props.riesgo && props.alerta && (
                    <li className="riesgo-alerta">
                      Riesgo jornada laboral Alerta
                    </li>
                  )}
                  {props.riesgo && props.enriesgo && (
                    <li className="riesgo-enriesgo">
                      Riesgo jornada laboral En riesgo
                    </li>
                  )}
                  {props.fit2000 && props.optimo && (
                    <li className="fit2000-optima">Fit 2000 Optimo</li>
                  )}
                  {props.fit2000 && props.bajoRiesgo && (
                    <li className="fit2000-bajoriesgo">Fit 2000 Bajo riesgo</li>
                  )}
                  {props.fit2000 && props.alerta && (
                    <li className="fit2000-alerta">Fit 2000 Alerta</li>
                  )}
                  {props.fit2000 && props.enriesgo && (
                    <li className="fit2000-enrisgo">Fit 2000 En riesgo</li>
                  )}
                  {props.sobereye && props.optimo && (
                    <li className="sobereye-optima">Sobereye Optimo</li>
                  )}
                  {props.sobereye && props.enriesgo && (
                    <li className="sobereye-enriesgo">Sobereye En riesgo</li>
                  )}
                  {props.ktest && props.optimo && (
                    <li className="ktest-optima">K-test Optimo</li>
                  )}
                  {props.ktest && props.alerta && (
                    <li className="ktest-alerta">K-test Alerta</li>
                  )}
                  {props.ktest && props.enriesgo && (
                    <li className="ktest-enriesgo">K-test En riesgo</li>
                  )}
                  {props.conducta && props.optimo && (
                    <li className="conducta-optima">Modelo conducta Optimo</li>
                  )}
                  {props.conducta && props.bajoRiesgo && (
                    <li className="conducta-bajoriesgo">
                      Modelo conducta Bajo riesgo
                    </li>
                  )}
                  {props.conducta && props.alerta && (
                    <li className="conducta-alerta">Modelo conducta Alerta</li>
                  )}
                  {props.conducta && props.enriesgo && (
                    <li className="conducta-enriesgo">
                      Modelo conducta En riesgo
                    </li>
                  )}
                </ul>
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
Area.propTypes = {};

export default Area;
