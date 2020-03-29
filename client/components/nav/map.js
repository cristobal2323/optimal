import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Mapa = props => (
  <li>
    <Link
      to="/dashboard/mapa"
      id="menu-1"
      data-menu="ok"
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-map-marker-alt" />
      <strong>Mapa</strong>
    </Link>
  </li>
);

Mapa.propTypes = {};

export default Mapa;
