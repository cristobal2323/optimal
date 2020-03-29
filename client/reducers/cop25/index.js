import initialState from './initialState';
import {
  FETCH_COP25_INIT,
  FETCH_COP25_SUCCESS,
  FETCH_COP25_FAILURE,
  RESET_COP25,
} from '../../actions/cop25/types';

export default function cop25(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_COP25:
      return {
        ...state,
        data: {},
        loading: true,
        status: 0,
      };
    case FETCH_COP25_INIT:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_COP25_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    case FETCH_COP25_FAILURE:
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
