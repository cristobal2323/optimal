import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { bindActionCreators } from 'redux';

/* Actions */
import * as loginactions from '../../actions/login/index';
import * as dashboardActions from '../../actions/dashboard';

/* Components */
import Home from '../home';
import Header from '../header';
import Nav from '../nav';

import Loading from '../common/loading';
import Modal from '../common/modal';

import 'react-datepicker/dist/react-datepicker.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* Estado donde realizamos el llamado a la API */
  async componentDidMount() {
    /* Verificamos el auth */
    let auth = localStorage.getItem('auth');
    auth = auth === 'true';
    if (!auth) {
      this.handleLogOut();
    } else {
      await this.props.actions.fetchInfo({}, true);
    }
  }

  componentWillUnmount() {
    this.props.actions.reset();
  }

  handleLogOut = () => {
    this.props.loginActions.logOut();
    this.props.history.push('/');
  };

  render() {
    let auth = localStorage.getItem('auth');
    auth = auth == 'true';
    let container;
    if (this.props.status !== 401) {
      container = (
        <section className="module--dashboard">
          {auth && (
            <React.Fragment>
              <Nav />
              <section id="dashboard" className="module--dashboardContainer">
                <Header handleLogOut={this.handleLogOut} />
                {!this.props.loading ? (
                  <React.Fragment>
                    <Route
                      exact
                      path={`${this.props.match.path}/home`}
                      component={Home}
                    />
                  </React.Fragment>
                ) : (
                  <Loading />
                )}
              </section>
            </React.Fragment>
          )}
        </section>
      );
    } else {
      container = <Modal history={this.props.history} state={true} />;
    }
    return container;
  }
}

const mapStateToProps = state => ({
  data: state.dashboard.data,
  loading: state.dashboard.loading,
  status: state.dashboard.status,
});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginactions, dispatch),
  actions: bindActionCreators(dashboardActions, dispatch),
});

Dashboard.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
