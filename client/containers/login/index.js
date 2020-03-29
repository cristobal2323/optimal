import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';

/* Component */
import Form from '../../components/login/form';

/* Actions */
import * as loginactions from '../../actions/login/index';

/* Images */
import '../../styles/img/login--background.jpg';
import Logo from '../../styles/img/login--logo.png';

/* Actions */

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {}

  /* Funcion Log IN */
  handleLogin = async event => {
    event.preventDefault();
    const obj = {
      correo: document.getElementById('email').value,
      clave: document.getElementById('pass').value,
    };
    await this.props.actions.logIn(obj);
  };

  render() {
    let auth = localStorage.getItem('auth');
    let ruta = '/dashboard/home';
    auth = auth == 'true';
    return auth ? (
      <Redirect to={ruta} />
    ) : (
      <section className="module--login">
        <div className="module--loginImg">
          <img src={Logo} alt="Logo" />
        </div>
        <Form
          status={this.props.status}
          loading={this.props.loading}
          auth={this.props.auth}
          handleLogin={this.handleLogin}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.login.auth,
  token: state.login.token,
  loading: state.login.loading,
  status: state.login.status,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginactions, dispatch),
});

Login.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
