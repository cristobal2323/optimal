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
    <Breadcrumb.Item active> Listado conductores</Breadcrumb.Item>
  </Breadcrumb>
);

Bread.propTypes = {};

export default Bread;
