import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Component */
import { Table } from 'react-bootstrap';

const TableComponent = props => (
  <section className="module--table top">
    <Table striped hover>
      <thead>
        <tr>
          <th className="center border-tl" data-name="id"></th>
          <th data-name="alias">
            <div className="flex">
              <div>Nombre</div>
              <div>
                <i className="fas fa-sort" />
              </div>
            </div>
          </th>
          <th data-name="alias">
            <div className="flex">
              <div>Operación</div>
              <div>
                <i className="fas fa-sort" />
              </div>
            </div>
          </th>
          <th data-name="alias">
            <div className="flex">
              <div>Fatigue for duty</div>
              <div>
                <i className="fas fa-sort" />
              </div>
            </div>
          </th>
          <th data-name="alias">
            <div className="flex">
              <div>Conducta</div>
              <div>
                <i className="fas fa-sort" />
              </div>
            </div>
          </th>
          <th className="center border-tr"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="center">
            <a href="#" className="table-button">
              <i className="fas fa-eye" />
            </a>
          </td>
          <td>Cristóbal Maturana</td>
          <td>Operación 1</td>
          <td className="red">100</td>
          <td className="yellow">20</td>
          <td className="center">
            <a href="#" className="table-button--normal">
              <i className="fas fa-ellipsis-v"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td className="center">
            <a href="#" className="table-button">
              <i className="fas fa-eye" />
            </a>
          </td>
          <td>Fernanda Mardones</td>
          <td>Operación 4</td>
          <td className="red">100</td>
          <td className="green">10</td>
          <td className="center border-br">
            <a href="#" className="table-button--normal">
              <i className="fas fa-ellipsis-v"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td className="center">
            <a href="#" className="table-button">
              <i className="fas fa-eye" />
            </a>
          </td>
          <td>Leoanardo Causa</td>
          <td>Operación 2</td>
          <td className="yellow">10</td>
          <td className="red">90</td>
          <td className="center">
            <a href="#" className="table-button--normal">
              <i className="fas fa-ellipsis-v"></i>
            </a>
          </td>
        </tr>
        <tr>
          <td className="center">
            <a href="#" className="table-button">
              <i className="fas fa-eye" />
            </a>
          </td>
          <td>Max Munro</td>
          <td>Operación 3</td>
          <td className="green">5</td>
          <td className="green">15</td>
          <td className="center">
            <a href="#" className="table-button--normal">
              <i className="fas fa-ellipsis-v"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </Table>
  </section>
);

TableComponent.propTypes = {};

export default TableComponent;
