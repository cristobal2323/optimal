import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

/* Component */
import { Table } from 'react-bootstrap';

const arrow = (name, sort) => {
  let icon;
  if (name === sort.column && sort.direction === 'asc') {
    icon = <i className="fas fa-sort-up" />;
  } else if (name === sort.column && sort.direction === 'des') {
    icon = <i className="fas fa-sort-down" />;
  } else {
    icon = <i className="fas fa-sort" />;
  }
  return icon;
};

const TableComponent = props => (
  <section className="module--mapa__table">
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th data-name="vehicleCode" onClick={props.handleSort}>
            <div className="flex">
              <div>Patente</div>
              <div>{arrow('vehicleCode', props.sort)}</div>
            </div>
          </th>
          <th data-name="vehicleType">
            <div className="flex">
              <div>Tipo</div>
              <div>{/*arrow('vehicleType', props.sort)*/}</div>
            </div>
          </th>
          <th data-name="vehicleModel" onClick={props.handleSort}>
            <div className="flex">
              <div>Modelo</div>
              <div>{arrow('vehicleModel', props.sort)}</div>
            </div>
          </th>
          <th data-name="fleetName" onClick={props.handleSort}>
            <div className="flex">
              <div>Flota</div>
              <div>{arrow('fleetName', props.sort)}</div>
            </div>
          </th>
          <th data-name="batteryCharge" onClick={props.handleSort}>
            <div className="flex">
              <div>Estado de la batería % (SoC)</div>
              <div>{arrow('batteryCharge', props.sort)}</div>
            </div>
          </th>
          <th data-name="batteryHealth" onClick={props.handleSort}>
            <div className="flex">
              <div>Estado de salud de batería % (SoH) </div>
              <div>{arrow('batteryHealth', props.sort)}</div>
            </div>
          </th>
          <th data-name="odometer" onClick={props.handleSort}>
            <div className="flex">
              <div>Odómetro (km)</div>
              <div>{arrow('odometer', props.sort)}</div>
            </div>
          </th>
          <th className="center">Acción</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.vehicleCode}</td>
              <td className="capitalize">
                {item.vehicleType ? item.vehicleType.toLowerCase() : ''}
              </td>
              <td>{item.vehicleModel}</td>
              <td>{item.fleetName}</td>
              <td>
                <NumberFormat
                  value={item.batteryCharge}
                  isNumericString
                  displayType={'text'}
                  thousandSeparator="."
                  decimalSeparator=","
                  allowedDecimalSeparators={[',', '.']}
                />
              </td>
              <td>
                <NumberFormat
                  value={item.batteryHealth}
                  isNumericString
                  displayType={'text'}
                  thousandSeparator="."
                  decimalSeparator=","
                  allowedDecimalSeparators={[',', '.']}
                />
              </td>
              <td>
                <NumberFormat
                  value={item.odometer}
                  isNumericString
                  displayType={'text'}
                  thousandSeparator="."
                  decimalSeparator=","
                  allowedDecimalSeparators={[',', '.']}
                />
              </td>
              <td className="center">
                <a onClick={() => props.onModal(item)}>
                  <i className="far fa-eye" />
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </section>
);

TableComponent.propTypes = {};

export default TableComponent;
