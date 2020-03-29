import React from 'react';
import PropTypes from 'prop-types';

const Cargador = props => (
  <li className="no-border">
    <a
      id="menu-4"
      data-menu="ok"
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-charging-station" />
      <strong>Cargadores</strong>
    </a>
  </li>
);

Cargador.propTypes = {};

export default Cargador;
