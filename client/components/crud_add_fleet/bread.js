import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Component */
import { Breadcrumb } from 'react-bootstrap';

const Bread = props => (
  <Breadcrumb>
    <div className="breadcrumb-item">
      <Link role="button" to="/dashboard/indicators" id="menu-1" data-menu="ok">
        Home
      </Link>
    </div>
    <div className="breadcrumb-item">
      <Link
        role="button"
        to="/dashboard/crud_list_fleet"
        id="menu-1"
        data-menu="ok"
      >
        Listado flota
      </Link>
    </div>
    <Breadcrumb.Item active>Nuevo flota</Breadcrumb.Item>
  </Breadcrumb>
);

Bread.propTypes = {};

export default Bread;
