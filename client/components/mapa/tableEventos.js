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
          <th data-name="nombre_evento" onClick={props.handleSort}>
            <div className="flex">
              <div>Nombre</div>
              <div>{arrow('nombre_evento', props.sort)}</div>
            </div>
          </th>
          <th>
            <div className="flex">
              <div>Dispositivo asociado</div>
              <div>
                <i className="fas fa-sort" />
              </div>
            </div>
          </th>
          <th data-name="alarmas" onClick={props.handleSort}>
            <div className="flex">
              <div>Cantidad de eventos registrados</div>
              <div>{arrow('alarmas', props.sort)}</div>
            </div>
          </th>
          <th data-name="ultima_modificacion" onClick={props.handleSort}>
            <div className="flex">
              <div>Fecha último evento</div>
              <div>{arrow('ultima_modificacion', props.sort)}</div>
            </div>
          </th>
          <th className="center">Acción</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.nombre_evento}</td>
              <td></td>
              <td>{item.alarmas}</td>
              <td>{item.ultima_modificacion}</td>
              <td className="center">
                <a onClick={props.onModal}>
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
