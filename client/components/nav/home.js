import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Mapa = (props) => (
  <li>
    <Link
      to="/dashboard/home"
      id="menu-1"
      data-menu="ok"
      className={`${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-home"></i>
      <strong>Home</strong>
    </Link>
  </li>
);

Mapa.propTypes = {};

export default Mapa;
