import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import { withRouter } from 'react-router-dom';

import Login from '../login';
import Dashboard from '../dashboard';

function Main({ location }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="*" component={Dashboard} />
      </Switch>
    </div>
  );
}

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Main);
