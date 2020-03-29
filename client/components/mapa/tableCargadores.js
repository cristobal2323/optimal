import React from 'react';
import PropTypes from 'prop-types';

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
          <th data-name="alias" onClick={props.handleSort}>
            <div className="flex">
              <div>Nombre</div>
              <div>{arrow('alias', props.sort)}</div>
            </div>
          </th>
          <th data-name="address" onClick={props.handleSort}>
            <div className="flex">
              <div>Dirección</div>
              <div>{arrow('address', props.sort)}</div>
            </div>
          </th>
          <th data-name="power" onClick={props.handleSort}>
            <div className="flex">
              <div>Potencia máxima</div>
              <div>{arrow('power', props.sort)}</div>
            </div>
          </th>
          <th data-name="state" onClick={props.handleSort}>
            <div className="flex">
              <div>Estado</div>
              <div>{arrow('state', props.sort)}</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.alias}</td>
              <td>{item.address}</td>
              <td>{item.power}</td>
              <td>{item.state ? 'Activo' : 'No activo'}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </section>
);

TableComponent.propTypes = {};

export default TableComponent;
