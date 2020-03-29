import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Indicators = props => (
  <li>
    <Link
      to="/dashboard/indicators"
      id="menu-8"
      data-menu="ok"
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
      className="active"
    >
      <i className="fas fa-chart-bar" />
      <strong>Indicadores</strong>
    </Link>
  </li>
);

Indicators.propTypes = {};

export default Indicators;
