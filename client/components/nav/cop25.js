import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cop25 = props => (
  <li>
    <Link
      to="/dashboard/cop25"
      id="menu-20"
      data-menu="ok"
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
    >
      <i className="fab fa-pagelines" />
      <strong>Cop 25</strong>
    </Link>
  </li>
);

Cop25.propTypes = {};

export default Cop25;
