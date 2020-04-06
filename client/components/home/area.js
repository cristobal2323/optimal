import React from 'react';
import AreaGraph from './areaGraph';
import DatePicker from 'react-datepicker';

const Area = (props) => (
  <React.Fragment>
    <section className="grids--container top bottom">
      <div className="grid-1">
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
                data-name="aptitud"
                onClick={props.handleFilter}
                className={props.aptitud ? 'active' : ''}
              >
                Aptitud laboral
              </li>
              <li
                data-name="conducta"
                onClick={props.handleFilter}
                className={props.conducta ? 'active' : ''}
              >
                Modelo conducta
              </li>
              <li>
                Semana
                <ul>
                  <li>Día</li>
                  <li>Semana</li>
                  <li>Mes</li>
                  <li>
                    <div className="grid-button_menu-date">
                      <div className="grid-button_menu-date_a">Otro: </div>
                      <div className="grid-button_menu-date_b">
                        <DatePicker
                          autoComplete="off"
                          selected={props.startDate}
                          onChange={props.handleChangeStart}
                          isClearable={true}
                          disabledKeyboardNavigation
                          placeholderText="Desde"
                          className="input-date"
                          id="date-start"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                      <div className="grid-button_menu-date_b">
                        <DatePicker
                          autoComplete="off"
                          selected={props.endDate}
                          onChange={props.handleChangeEnd}
                          isClearable={true}
                          disabledKeyboardNavigation
                          placeholderText="Hasta"
                          className="input-date"
                          id="date-end"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
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
            aptitud={props.aptitud}
            riesgo={props.riesgo}
            conducta={props.conducta}
            optimo={props.optimo}
            enriesgo={props.enriesgo}
            alerta={props.alerta}
          />
        </div>
        <div className="grid-simbo top">
          <ul>
            {props.riesgo && props.optimo && (
              <li className="riesgo-optimo">Riesgo jornada laboral Optimo</li>
            )}
            {props.riesgo && props.alerta && (
              <li className="riesgo-alerta">Riesgo jornada laboral Alerta</li>
            )}
            {props.riesgo && props.enriesgo && (
              <li className="riesgo-enriesgo">
                Riesgo jornada laboral En riesgo
              </li>
            )}
            {props.aptitud && props.optimo && (
              <li className="aptitud-optima">Aptitud laboral Optimo</li>
            )}
            {props.aptitud && props.alerta && (
              <li className="aptitud-alerta">Aptitud laboral Alerta</li>
            )}
            {props.aptitud && props.enriesgo && (
              <li className="aptitud-enrisgo">Aptitud laboral En riesgo</li>
            )}
            {props.conducta && props.optimo && (
              <li className="conducta-optima">Modelo conducta Optimo</li>
            )}
            {props.conducta && props.alerta && (
              <li className="conducta-alerta">Modelo conducta Alerta</li>
            )}
            {props.conducta && props.enriesgo && (
              <li className="conducta-enriesgo">Modelo conducta En riesgo</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  </React.Fragment>
);

Area.propTypes = {};

export default Area;
