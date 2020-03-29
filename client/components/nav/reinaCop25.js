import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ReinaCop25 = props => (
  <li>
    <Link
      to="/dashboard/reina_cop25"
      id="menu-reinaCop25"
      data-menu="ok"
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fas fa-map-marker-alt" />
      <strong>Reina Cop 25</strong>
    </Link>
  </li>
);

ReinaCop25.propTypes = {};

export default ReinaCop25;
