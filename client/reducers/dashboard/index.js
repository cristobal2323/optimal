import initialState from './initialState';
import {
  FETCH_DASHBOARD_INIT,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
  RESET_DASHBOARD,
} from '../../actions/dashboard/types';

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_DASHBOARD:
      return {
        ...state,
        data: {},
        loading: true,
        status: 0,
      };
    case FETCH_DASHBOARD_INIT:
      return {
        ...state,
        loading: action.load,
      };
    case FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    case FETCH_DASHBOARD_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 501,
      };

    default:
      return state;
  }
}
