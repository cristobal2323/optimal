import React from 'react';
import PropTypes from 'prop-types';

/* Component */
import DatePicker from 'react-datepicker';
import { Form } from 'react-bootstrap';

const Header = props => (
  <Form>
    <section className="module--indicatorsHeader">
      <div className="module--indicatorsHeaderButton">
        <div className="module--indicatorsHeaderButtons">
          <ul>
            <li
              data-value="day"
              data-filter="ok"
              role="button"
              tabIndex={0}
              onClick={props.handleSelect}
              onKeyPress={props.handleSelect}
              className="active"
              id="select-day"
            >
              Día
            </li>
            <li
              data-value="week"
              data-filter="ok"
              role="button"
              tabIndex={0}
              onClick={props.handleSelect}
              onKeyPress={props.handleSelect}
              id="select-week"
            >
              Semana
            </li>
            <li
              data-value="month"
              data-filter="ok"
              role="button"
              tabIndex={0}
              onClick={props.handleSelect}
              onKeyPress={props.handleSelect}
              id="select-month"
            >
              Mes
            </li>
            <li
              data-value="year"
              data-filter="ok"
              role="button"
              tabIndex={0}
              onClick={props.handleSelect}
              onKeyPress={props.handleSelect}
              id="select-year"
            >
              Año
            </li>
          </ul>
        </div>

        <div className="module--indicatorsHeaderButtons__boxDate">
          <div className="module--indicatorsHeaderTextMini">
            <h4>Otro</h4>
          </div>
          <div className="module--indicatorsHeaderButtons__date">
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
          <div className="module--indicatorsHeaderButtons__date">
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
      </div>
      <div className="module--indicatorsHeaderSelect">
        <Form.Group controlId="punto-carga">
          <Form.Label>Punto de carga</Form.Label>
          <Form.Control
            size="sm"
            as="select"
            value={props.puntoCarga}
            onChange={props.handleMedidor}
            onKeyPress={props.handleMedidor}
          >
            {props.data &&
              props.data.medidores.data.map(item => (
                <option key={item.id} value={item.id}>
                  {item.apodo}
                </option>
              ))}
          </Form.Control>
        </Form.Group>
      </div>
      <div className="module--indicatorsHeaderText">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Contrato</Form.Label>
          <h3>BT4.3</h3>
        </Form.Group>
      </div>
    </section>
  </Form>
);

Header.propTypes = {};

export default Header;
