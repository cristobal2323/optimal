import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  <section className="module--table scroll" onScroll={props.handleScroll}>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="center" data-name="id" onClick={props.handleSort}>
            <div className="flex">
              <div>Id</div>
              <div>{arrow('id', props.sort)}</div>
            </div>
          </th>
          <th data-name="alias" onClick={props.handleSort}>
            <div className="flex">
              <div>Patente</div>
              <div>{arrow('alias', props.sort)}</div>
            </div>
          </th>
          <th className="center">Acción</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, id) => (
          <tr key={id}>
            <td className="center">{item.id}</td>
            <td>{item.alias}</td>
            <td className="center">
              {item.state && (
                <ul>
                  <li>
                    <Link to={`/dashboard/crud_update_vehicle/${item.code}`}>
                      <i className="far fa-eye" />
                    </Link>
                  </li>
                  <li>
                    <a data-id={item.id} onClick={props.onModal}>
                      <i className="fas fa-trash-alt" />
                    </a>
                  </li>
                </ul>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    {props.loadingTable && (
      <div className="module--table--loading">
        <h6>
          <i className="fas fa-spinner fa-pulse" />
        </h6>
      </div>
    )}
  </section>
);

TableComponent.propTypes = {};

export default TableComponent;
