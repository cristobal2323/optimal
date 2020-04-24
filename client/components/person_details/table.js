import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Component */
import { Table } from 'react-bootstrap';

const TableComponent = (props) => (
  <section className="module--table top">
    <div className="table-title">
      <h2>Alertas</h2>
    </div>
    <Table striped hover>
      <thead>
        <tr>
          <th className="center border-tl" data-name="id" rowSpan="2" />
          <th data-name="alias" rowSpan="2" className="border--right">
            <div className="flex">
              <div>Dispositivo</div>
              <div>
                <i className="fas fa-sort" />
              </div>
            </div>
          </th>
          <th data-name="alias" rowSpan="2" className="border--right">
            <div className="flex">
              <div>Fecha</div>
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
          <th className="center border-tr" rowSpan="2" />
        </tr>
        <tr>
          <th>Fecha</th>
          <th>Nivel</th>
          <th className="border--right">Test</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="center">
            <a href="#" className="table-button">
              <i className="fas fa-eye" />
            </a>
          </td>
          <td>Fit 2000</td>
          <td>Operación 2</td>
          <td>Área 2</td>
          <td>C-Mina</td>
          <td>
            <p>31-03-2020 08:00</p>
          </td>
          <td className="yellow">
            <p>
              <span>30</span>
            </p>
          </td>
          <td>
            <p>Sobereye</p>
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
          <td>K-Test</td>
          <td>Operación 4</td>
          <td>Área 4</td>
          <td>B-Flotación</td>
          <td>
            <p>31-03-2020 08:00</p>
          </td>
          <td className="yellow">
            <p>
              <span>30</span>
            </p>
          </td>
          <td>
            <p>K-Test</p>
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
          <td>Sobereye</td>
          <td>Operación 4</td>
          <td>Área 4</td>
          <td>A-Planta</td>
          <td>
            <p>31-03-2020 08:00</p>
          </td>
          <td className="red">
            <p>
              <span>100</span>
            </p>
          </td>
          <td>
            <p>K-Test</p>
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
          <td>Cristóbal Maturana</td>
          <td>Operación 1</td>
          <td>Área 1</td>
          <td>A-Mina</td>
          <td>
            <p>27-03-2020 08:00</p>
          </td>
          <td className="red">
            <p>
              <span>80</span>
            </p>
          </td>
          <td>
            <p>Fit 2000</p>
          </td>
          <td className="center border-br">
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
