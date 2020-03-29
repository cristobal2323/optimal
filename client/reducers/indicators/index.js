import initialState from './initialState';
import {
  FETCH_LIST_INIT,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  RESET_INDICATORS,
} from '../../actions/indicators/types';

export default function listUser(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_INDICATORS:
      return {
        ...state,
        data: {},
        loading: true,
        status: 0,
      };
    case FETCH_LIST_INIT:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    case FETCH_LIST_FAILURE:
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
