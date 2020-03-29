import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Img */
import Logo from '../../styles/img/login--logo.png';

/* Components */
import Indicators from '../../components/nav/indicators';
import Mapa from '../../components/nav/map';
import Cop25 from '../../components/nav/cop25';
import Eventos from '../../components/nav/eventos';
import Vehiculo from '../../components/nav/vehiculo';
import Cargador from '../../components/nav/cargador';
import Conductores from '../../components/nav/conductores';
import Flota from '../../components/nav/flota';

import ReinaCop25 from '../../components/nav/reinaCop25';

import NewAdmin from '../../components/nav/newAdmin';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {}

  handleMenu = event => {
    const element = event.currentTarget;
    const childName = element.dataset.child;
    const menus = document.querySelectorAll('[data-menu]');

    for (let i = 0; i < menus.length; i++) {
      if (menus[i].id !== element.id) {
        menus[i].classList.remove('active');
        if (menus[i].dataset.child) {
          document
            .getElementById(menus[i].dataset.child)
            .classList.remove('active');
        }
      }
    }

    if (childName) {
      document.getElementById(childName).classList.toggle('active');
    }
    element.classList.toggle('active');
  };

  handleSubMenu = event => {
    const element = event.currentTarget;

    const submenus = document.querySelectorAll('[data-submenu]');

    for (let i = 0; i < submenus.length; i++) {
      if (submenus[i].id !== element.id) {
        submenus[i].classList.remove('active');
      }
    }
    element.classList.toggle('active');
  };

  handleConvertMenu = () => {
    const nav = document.getElementById('mobile-1');
    nav.classList.toggle('mobile');

    const dashboard = document.getElementById('dashboard');
    dashboard.classList.toggle('mobile');

    const nav2 = document.getElementById('mobile-2');
    nav2.classList.toggle('mobile');

    const menus = document.querySelectorAll('[data-menu]');
    for (let i = 0; i < menus.length; i++) {
      menus[i].classList.toggle('mobile');
    }

    const submenus = document.querySelectorAll('[data-subbox]');
    for (let i = 0; i < submenus.length; i++) {
      submenus[i].classList.toggle('mobile');
    }
  };

  render() {
    return (
      <nav id="mobile-1" className="module--dashboardNav">
        <div className="module--dashboardNav__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="module--dashboardNav__menu">
          <ul>
            {false && <Indicators handleMenu={this.handleMenu} />}
            {false && <ReinaCop25 handleMenu={this.handleMenu} />}
            {true && <Mapa handleMenu={this.handleMenu} />}
            {true && <Cop25 handleMenu={this.handleMenu} />}

            {false && (
              <Eventos
                handleSubMenu={this.handleSubMenu}
                handleMenu={this.handleMenu}
              />
            )}
            {false && <Vehiculo handleMenu={this.handleMenu} />}
            {false && <Cargador handleMenu={this.handleMenu} />}
            {false && <Conductores handleMenu={this.handleMenu} />}
            {false && <Flota handleMenu={this.handleMenu} />}
            {true && <NewAdmin handleMenu={this.handleMenu} />}
          </ul>
        </div>
        <div id="mobile-2" className="module--dashboardNav__arrow">
          <div
            onClick={this.handleConvertMenu}
            onKeyDown={this.handleConvertMenu}
          >
            <i className="fas fa-angle-left" />
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

Nav.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
