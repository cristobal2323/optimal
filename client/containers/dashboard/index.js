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
import Indicators from '../indicators';
import Mapa from '../mapa';

import Cop25 from '../cop25';

import CrudListVehicle from '../crud_list_vehicle';
import CrudAddVehicle from '../crud_add_vehicle';
import CrudUpdateVehicle from '../crud_update_vehicle';

import CrudListDriver from '../crud_list_driver';
import CrudAddDriver from '../crud_add_driver';
import CrudUpdateDriver from '../crud_update_driver';

import CrudListDevice from '../crud_list_device';
import CrudAddDevice from '../crud_add_device';
import CrudUpdateDevice from '../crud_update_device';

import CrudListCharger from '../crud_list_charger';
import CrudAddCharger from '../crud_add_charger';
import CrudUpdateCharger from '../crud_update_charger';

import CrudListFleet from '../crud_list_fleet';
import CrudAddFleet from '../crud_add_fleet';
import CrudUpdateFleet from '../crud_update_fleet';

import ReinaCop25 from '../cop25_reina';

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
                    {false && (
                      <Route
                        exact
                        path={`${this.props.match.path}/indicators`}
                        component={Indicators}
                      />
                    )}
                    {false && (
                      <Route
                        exact
                        path={`${this.props.match.path}/reina_cop25`}
                        component={ReinaCop25}
                      />
                    )}
                    {true && (
                      <Route
                        exact
                        path={`${this.props.match.path}/cop25`}
                        component={Cop25}
                      />
                    )}
                    {true && (
                      <React.Fragment>
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_list_vehicle`}
                          component={CrudListVehicle}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_add_vehicle`}
                          component={CrudAddVehicle}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_update_vehicle/:id`}
                          component={CrudUpdateVehicle}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_list_driver`}
                          component={CrudListDriver}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_add_driver`}
                          component={CrudAddDriver}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_update_driver/:id`}
                          component={CrudUpdateDriver}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_list_device`}
                          component={CrudListDevice}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_add_device`}
                          component={CrudAddDevice}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_update_device/:id`}
                          component={CrudUpdateDevice}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_list_charger`}
                          component={CrudListCharger}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_add_charger`}
                          component={CrudAddCharger}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_update_charger/:id`}
                          component={CrudUpdateCharger}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_list_fleet`}
                          component={CrudListFleet}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_add_fleet`}
                          component={CrudAddFleet}
                        />
                        <Route
                          exact
                          path={`${this.props.match.path}/crud_update_fleet/:id`}
                          component={CrudUpdateFleet}
                        />
                      </React.Fragment>
                    )}
                    {true && (
                      <Route
                        exact
                        path={`${this.props.match.path}/mapa`}
                        component={Mapa}
                      />
                    )}
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
