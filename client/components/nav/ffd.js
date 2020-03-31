import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Admin = props => (
  <li className="relative">
    <a
      id="menu-100"
      data-menu="ok"
      className="arrow"
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
      data-child="sub--menu_100"
    >
      <i className="fas fa-low-vision" />
      <strong>FFD</strong>
    </a>
    <div
      data-subbox="ok"
      id="sub--menu_100"
      className="module--dashboardNav__subMenu"
    >
      <div className="module--dashboardNav__subMenuBox">
        <h3>Eventos por:</h3>
        <Link
          to="/dashboard/crud_list_vehicle"
          id="submenu100-a"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Resumen
        </Link>
        <Link
          to="/dashboard/crud_list_device"
          id="submenu100-b"
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
          className="bottom"
        >
          Conductor
        </Link>
      </div>
    </div>
  </li>
);

Admin.propTypes = {};

export default Admin;
