import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Admin = props => (
  <li className="relative">
    <a
      id="menu-7"
      data-menu="ok"
      className="arrow"
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
      data-child="sub--menu_7"
    >
      <i className="fas fa-traffic-light" />
      <strong>Conducta</strong>
    </a>
    <div
      data-subbox="ok"
      id="sub--menu_7"
      className="module--dashboardNav__subMenu"
    >
      <div className="module--dashboardNav__subMenuBox">
        <h3>Eventos por:</h3>
        <Link
          to="/dashboard/list_vehicle"
          id="submenu5"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Resumen
        </Link>
        <Link
          to="/dashboard/list_type_vehicle"
          id="submenu19"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Detalle
        </Link>
        <Link
          to="/dashboard/list_type_vehicle"
          id="submenu20"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
          className="bottom"
        >
          conductor
        </Link>
      </div>
    </div>
  </li>
);

Admin.propTypes = {};

export default Admin;
