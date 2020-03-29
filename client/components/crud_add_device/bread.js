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
        to="/dashboard/crud_list_device"
        id="menu-1"
        data-menu="ok"
      >
        Listado dispositivo
      </Link>
    </div>
    <Breadcrumb.Item active>Nuevo dispositivo</Breadcrumb.Item>
  </Breadcrumb>
);

Bread.propTypes = {};

export default Bread;
