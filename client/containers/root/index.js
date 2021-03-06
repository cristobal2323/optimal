import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Main from '../main';

export default function Root({ history, store }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Main />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
