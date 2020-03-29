import React from 'react';
import PropTypes from 'prop-types';

const Vehiculo = props => (
  <li className="no-border">
    <a
      id="menu-3"
      data-menu="ok"
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
      className="space"
    >
      <i className="fas fa-car-alt" />
      <strong>Vehículo</strong>
    </a>
  </li>
);

Vehiculo.propTypes = {};

export default Vehiculo;
