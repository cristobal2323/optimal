import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

/* Component */
import { Table } from 'react-bootstrap';
import { prop } from 'ramda';

const color = (clasificacion) => {
  if (clasificacion === 'Optimo') {
    return 'green';
  } else if (clasificacion === 'Bajo riesgo') {
    return 'yellow';
  } else if (clasificacion === 'Alerta') {
    return 'orange';
  } else if (clasificacion === 'En Riesgo') {
    return 'red';
  } else if (clasificacion === 'Optimo - Bajo riesgo - Alerta') {
    return 'green';
  } else if (clasificacion === 'Optimo - Bajo riesgo') {
    return 'green';
  }
};

const TableComponent = (props) => {
  if (props.loadingTable) {
    return (
      <section className="grids--container top bottom">
        <div className="grid-1">
          <div className="grid-loading">
            <h1>
              {' '}
              <i className="fas fa-cog fa-spin"></i>
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="module--table top">
      <Table striped hover>
        <thead>
          <tr>
            <th className="center border-tl" data-name="id" rowSpan="2" />
            <th data-name="alias" rowSpan="2" className="border--right">
              <div className="flex">
                <div>Nombre</div>
                <div>
                  <i className="fas fa-sort" />
                </div>
              </div>
            </th>
            <th data-name="alias" rowSpan="2" className="border--right">
              <div className="flex">
                <div>Área</div>
                <div>
                  <i className="fas fa-sort" />
                </div>
              </div>
            </th>
            <th data-name="alias" rowSpan="2" className="border--right">
              <div className="flex">
                <div>Turno</div>
                <div>
                  <i className="fas fa-sort" />
                </div>
              </div>
            </th>
            <th data-name="alias" colSpan="2" className="border--right">
              <div className="flex">
                <div>
                  <div>Riesgo jornada laboral</div>
                </div>
                <div>
                  <i className="fas fa-sort" />
                </div>
              </div>
            </th>
            <th data-name="alias" colSpan="3" className="border--right">
              <div className="flex">
                <div>
                  <div>Aptitud laboral</div>
                </div>
                <div>
                  <i className="fas fa-sort" />
                </div>
              </div>
            </th>
            <th
              data-name="alias"
              colSpan="2"
              className="border--right"
              className="border--right"
            >
              <div className="flex">
                <div>Modelo conducta</div>
                <div>
                  <i className="fas fa-sort" />
                </div>
              </div>
            </th>
            <th className="center border-tr" rowSpan="2" />
          </tr>
          <tr>
            <th>Fecha</th>
            <th className="border--right">Nivel</th>
            <th>Fecha</th>
            <th>Nivel</th>
            <th className="border--right">Test</th>
            <th>Fecha</th>
            <th className="border--right">Nivel</th>
          </tr>
        </thead>
        <tbody>
          {props.dataTable.datos.map((item, i) => (
            <tr key={i}>
              <td className="center">
                <a href="#" className="table-button">
                  <i className="fas fa-eye" />
                </a>
              </td>
              <td>{item.nombre}</td>
              <td>{item.area}</td>
              <td>{item.turno}</td>
              <td>
                <p>
                  {moment(item.columna_jornada_riesgo_laboral.fecha).format(
                    'DD-MM-YYYY HH:MM',
                  )}
                </p>
              </td>
              <td
                className={color(
                  item.columna_jornada_riesgo_laboral.clasificacion_glosa,
                )}
              >
                <p>
                  <span>{item.columna_jornada_riesgo_laboral.valor}</span>
                </p>
              </td>
              <td>
                <p>
                  {moment(item.columna_aptitud_laboral.fecha).format(
                    'DD-MM-YYYY HH:MM',
                  )}
                </p>
              </td>
              <td
                className={color(
                  item.columna_aptitud_laboral.clasificacion_glosa,
                )}
              >
                <p>
                  <span>{item.columna_aptitud_laboral.valor}</span>
                </p>
              </td>
              <td>
                <p>{item.columna_aptitud_laboral.test}</p>
              </td>
              <td>
                <p>
                  <span>{item.columna_evaluacion_conductual.valor}</span>
                </p>
              </td>
              <td
                className={color(
                  item.columna_evaluacion_conductual.clasificacion_glosa,
                )}
              >
                <p>
                  <span>{item.columna_evaluacion_conductual.valor}</span>
                </p>
              </td>
              <td className="center border-br">
                <a href="#" className="table-button--normal">
                  <i className="fas fa-ellipsis-v"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

TableComponent.propTypes = {};

export default TableComponent;
