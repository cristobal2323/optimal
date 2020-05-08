import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Admin = (props) => (
  <li className="relative">
    <a
      id="menu-100"
      data-menu="ok"
      className={`arrow ${props.mobile}`}
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
      data-child="sub--menu_100"
    >
      <i className="fas fa-user-alt" />
      <strong>Persona</strong>
    </a>
    <div
      data-subbox="ok"
      id="sub--menu_100"
      className={`module--dashboardNav__subMenu ${props.mobile}`}
    >
      <div className="module--dashboardNav__subMenuBox">
        <h3>Eventos por:</h3>
        <Link
          to="/dashboard/person_details"
          id="submenu100-a"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Detalle
        </Link>
        <Link
          to="/dashboard/crud_list_driver"
          id="submenu100-c"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
          className={`bottom ${props.mobile}`}
        >
          Otro
        </Link>
      </div>
    </div>
  </li>
);

Admin.propTypes = {};

export default Admin;
