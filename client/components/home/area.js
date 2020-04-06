import React from 'react';
import AreaGraph from './areaGraph';
import DatePicker from 'react-datepicker';

const Area = (props) => (
  <React.Fragment>
    <section className="grids--container top bottom">
      <div className="grid-1">
        <div className="grid-button">
          <ul>
            <li className="active">Riesgo jornada laboral</li>
            <li>Aptitud laboral</li>
            <li>Modelo conducta</li>
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
                        id="date-start"
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
          <AreaGraph />
        </div>
      </div>
    </section>
  </React.Fragment>
);

Area.propTypes = {};

export default Area;
