import React from 'react';
import PropTypes from 'prop-types';

const Eventos = props => (
  <li className="relative">
    <a
      id="menu-2"
      data-menu="ok"
      onClick={props.handleMenu}
      onKeyDown={props.handleMenu}
      data-child="sub--menu_2"
      className="space arrow"
    >
      <i className="fas fa-exclamation-circle" />
      <strong>Eventos</strong>
    </a>
    <div
      id="sub--menu_2"
      data-subbox="ok"
      className="module--dashboardNav__subMenu"
    >
      <div className="module--dashboardNav__subMenuBox">
        <h3>Eventos por:</h3>
        <a
          id="submenu1"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Vehículo
        </a>
        <a
          id="submenu2"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Cargadores
        </a>
        <a
          id="submenu3"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
        >
          Flotas
        </a>
        <a
          id="submenu4"
          data-submenu="ok"
          onClick={props.handleSubMenu}
          onKeyDown={props.handleSubMenu}
          className="bottom"
        >
          Conductores
        </a>
      </div>
    </div>
  </li>
);

Eventos.propTypes = {};

export default Eventos;
