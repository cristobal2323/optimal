import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import login from './login';
import dashboard from './dashboard';
import home from './home';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    dashboard,
    login,
    home,
  });

export default createRootReducer;
