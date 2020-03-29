import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import login from './login';

import dashboard from './dashboard';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    dashboard,
    login,
  });

export default createRootReducer;
