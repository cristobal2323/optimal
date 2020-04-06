import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Component */
import { Table } from 'react-bootstrap';

const TableComponent = (props) => (
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
              <div>Área</div>
              <div>
                <i className="fas fa-sort" />
              </div>
            </div>
          </th>
          <th data-name="alias">
            <div className="flex">
              <div>Turno</div>
              <div>
                <i className="fas fa-sort" />
              </div>
            </div>
          </th>
          <th data-name="alias">
            <div className="flex">
              <div>Riesgo jornada laboral</div>
              <div>
                <i className="fas fa-sort" />
              </div>
            </div>
          </th>
          <th data-name="alias">
            <div className="flex">
              <div>Aptitud laboral</div>
              <div>
                <i className="fas fa-sort" />
              </div>
            </div>
          </th>
          <th data-name="alias">
            <div className="flex">
              <div>Modelo conducta</div>
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
          <td>Área 1</td>
          <td>A</td>
          <td className="red">
            <p>
              27-03-2020 08:00 <span>100</span>
            </p>
          </td>
          <td className="yellow">
            <p>
              31-03-2020 08:00 <span>80</span> FIT 2000
            </p>
          </td>
          <td className="yellow">
            <p>
              27-03-2020 08:00 <span>20</span>
            </p>
          </td>
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
          <td>Área 4</td>
          <td>B</td>
          <td className="red">
            <p>
              31-03-2020 08:00 <span>100</span>
            </p>
          </td>
          <td className="yellow">
            <p>
              31-03-2020 08:00 <span>30</span> K-Test
            </p>
          </td>
          <td className="green">
            <p>
              27-03-2020 08:00 <span>10</span>
            </p>
          </td>
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
          <td>Área 2</td>
          <td>C</td>
          <td className="yellow">
            <p>
              01-04-2020 08:00 <span>70</span>
            </p>
          </td>
          <td className="green">
            <p>
              31-03-2020 08:00 <span>10</span> Sobereye
            </p>
          </td>
          <td className="red">
            <p>
              27-03-2020 08:00 <span>100</span>
            </p>
          </td>
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
          <td>Área 3</td>
          <td>B</td>
          <td className="green">
            <p>
              20-04-2020 08:00 <span>10</span>
            </p>
          </td>
          <td className="red">
            <p>
              31-03-2020 08:00 <span>90</span> FIT 2000
            </p>
          </td>
          <td className="yellow">
            <p>
              27-03-2020 08:00 <span>20</span>
            </p>
          </td>
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
