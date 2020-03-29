import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';

import configureStore from '_store/configureStore';

import Root from './containers/root';

const history = createBrowserHistory();
const store = configureStore(history);

render(
  <Root history={history} store={store} />,
  document.getElementById('app'),
);
