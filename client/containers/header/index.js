import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* Component */
import Config from '../../components/header/config';
import Client from '../../components/header/client';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {}

  handleConvertMenu = () => {
    const nav = document.getElementById('mobile-1');
    nav.classList.toggle('extend');

    const dashboard = document.getElementById('dashboard');
    dashboard.classList.toggle('extend');
  };

  render() {
    const name = localStorage.getItem('nombre');
    const email = localStorage.getItem('email');
    const client = localStorage.getItem('cliente');
    const logoClient = localStorage.getItem('logoClient');
    let nameShort = '';

    if (name.length > 0) {
      const nameArr = name.split(' ');
      if (nameArr[0]) {
        nameShort += nameArr[0].substring(0, 1);
      }
      if (nameArr[1]) {
        nameShort += nameArr[1].substring(0, 1);
      }
    }

    return (
      <section className="module--dashboardHeader">
        <div className="module--dashboardHeadeBtnNav">
          <a
            onClick={this.handleConvertMenu}
            onKeyPress={this.handleConvertMenu}
          >
            <i className="fas fa-bars" />
          </a>
          <Client logoClient={logoClient} client={client} />
        </div>

        <Config
          nameShort={nameShort}
          name={name}
          email={email}
          handleLogOut={this.props.handleLogOut}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

Header.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
