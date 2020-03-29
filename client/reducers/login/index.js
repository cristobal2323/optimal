import initialState from './initialState';
import {
  SAVE_LOGIN_INIT,
  SAVE_LOGIN_SUCCESS,
  SAVE_LOGIN_FAILURE,
  RESET_LOGIN,
  LOG_OUT,
} from '../../actions/login/types';

export default function login(state = initialState, action) {
  switch (action.type) {
    case RESET_LOGIN:
      return {
        ...state,
        message: null,
      };
    case LOG_OUT:
      localStorage.clear();
      return {
        ...state,
        auth: false,
        loading: false,
      };
    case SAVE_LOGIN_INIT:
      return {
        ...state,
        loading: true,
        error: null,
        auth: false,
      };
    case SAVE_LOGIN_SUCCESS: {
      const auth =
        action.payload.status === 200 || action.payload.status === 201
          ? true
          : false;
      if (auth) {
        localStorage.setItem('auth', auth);
        localStorage.setItem('nombre', action.payload.data.userName);
      }
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        auth:
          action.payload.status === 200 || action.payload.status === 201
            ? true
            : false,
      };
    }
    case SAVE_LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        auth: false,
      };
    default:
      return state;
  }
}
