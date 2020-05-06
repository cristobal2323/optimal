import initialState from './initialState';
import {
  FETCH_CRUD_AREA_TURNOS_INIT,
  FETCH_CRUD_AREA_TURNOS_SUCCESS,
  FETCH_CRUD_AREA_TURNOS_FAILURE,
  RESET_CRUD_HOME,
} from '../../actions/home/types';

export default function home(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_CRUD_HOME:
      return {
        ...state,
        data: {},
        status: 0,
        count: 0,
      };
    case FETCH_CRUD_AREA_TURNOS_INIT:
      return {
        ...state,
        loadingAreaTurnos: true,
      };
    case FETCH_CRUD_AREA_TURNOS_SUCCESS:
      return {
        ...state,
        dataAreaTurnos: action.payload.data,
        loadingAreaTurnos: false,
        statusAreaTurnos: action.payload.status,
      };
    case FETCH_CRUD_AREA_TURNOS_FAILURE:
      return {
        ...state,
        dataAreaTurnos: {},
        loadingAreaTurnos: false,
        statusAreaTurnos: 501,
      };
    default:
      return state;
  }
}
