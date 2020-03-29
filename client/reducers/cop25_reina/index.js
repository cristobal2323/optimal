import initialState from './initialState';
import {
  FETCH_COP25_REINA_INIT,
  FETCH_COP25_REINA_SUCCESS,
  FETCH_COP25_REINA_FAILURE,
  RESET_COP25_REINA,
} from '../../actions/cop25_reina/types';

export default function cop25(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_COP25_REINA:
      return {
        ...state,
        data: {},
        loading: true,
        status: 0,
      };
    case FETCH_COP25_REINA_INIT:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_COP25_REINA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    case FETCH_COP25_REINA_FAILURE:
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
