import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Admin = props => (
  <li className="relative">
    <a
      id="menu-7"
      data-menu="ok"
      className="space arrow"
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
      data-child="sub--menu_7"
    >
      <i className="fas fa-user-cog" />
      <strong>Administrar</strong>
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
          Vehículos
        </Link>
        <Link
          to="/dashboard/list_type_vehicle"
          id="submenu19"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Tipo Vehículos
        </Link>
        <Link
          to="/dashboard/list_marca"
          id="submenu20"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Marca
        </Link>
        <Link
          to="/dashboard/list_modelo"
          id="submenu21"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Modelo
        </Link>
        <Link
          to="/dashboard/list_battery"
          id="submenu6"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Plaza de carga
        </Link>
        <Link
          to="/dashboard/list_station"
          id="submenu7"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Estación de carga
        </Link>
        <Link
          to="/dashboard/list_point"
          id="submenu8"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Punto de carga
        </Link>
        <Link
          to="/dashboard/list_outlet"
          id="submenu9"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Outlet
        </Link>
        <Link
          to="/dashboard/list_flota"
          id="submenu10"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Flotas
        </Link>
        <Link
          to="/dashboard/list_company"
          id="submenu11"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Empresas
        </Link>
        <Link
          to="/dashboard/list_driver"
          id="submenu12"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Conductores
        </Link>
        <Link
          to="/dashboard/list_phone_driver"
          id="submenu13"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Teléfono Conductores
        </Link>
        <Link
          to="/dashboard/list_event"
          id="submenu14"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Eventos
        </Link>
        <Link
          to="/dashboard/list_gps"
          id="submenu15"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          GPS
        </Link>
        <Link
          to="/dashboard/list_dispositivo"
          id="submenu16"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Dispositivo
        </Link>
        <Link
          to="/dashboard/list_type_conector"
          id="submenu17"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Tipo de conector
        </Link>
        <Link
          to="/dashboard/list_usuario"
          id="submenu18"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
          className="bottom"
        >
          Usuario
        </Link>
      </div>
    </div>
  </li>
);

Admin.propTypes = {};

export default Admin;
