import React from 'react';
import PropTypes from 'prop-types';

const Flota = props => (
  <li>
    <a
      id="menu-6"
      data-menu="ok"
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-th" />
      <strong>Flota</strong>
    </a>
  </li>
);

Flota.propTypes = {};

export default Flota;
