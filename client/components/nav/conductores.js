import React from 'react';
import PropTypes from 'prop-types';

const Conductores = props => (
  <li className="no-border">
    <a
      id="menu-5"
      data-menu="ok"
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-user-friends" />
      <strong>Conductores</strong>
    </a>
  </li>
);

Conductores.propTypes = {};

export default Conductores;
