import React from 'react';
import AreaGraph from './areaGraph';
import DatePicker from 'react-datepicker';

const Area = (props) => (
  <React.Fragment>
    <section className="grids--container top bottom">
      <div className="grid-1">
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
        <div className="grid-title">
          <h2>Comportamiento por semana</h2>
        </div>
        <div className="grid-pie">
          <AreaGraph
            aptitud={props.aptitud}
            riesgo={props.riesgo}
            conducta={props.conducta}
          />
        </div>
        <div className="grid-simbo top">
          <ul>
            <li className="riesgo">Riesgo jornada laboral</li>
            <li className="aptitud">Aptitud laboral</li>
            <li className="conducta">Modelo conducta</li>
          </ul>
        </div>
      </div>
    </section>
  </React.Fragment>
);

Area.propTypes = {};

export default Area;
