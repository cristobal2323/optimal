import initialState from './initialState';
import {
  FETCH_CRUD_AREA_TURNOS_INIT,
  FETCH_CRUD_AREA_TURNOS_SUCCESS,
  FETCH_CRUD_AREA_TURNOS_FAILURE,
  FETCH_CRUD_TORTAS_INIT,
  FETCH_CRUD_TORTAS_SUCCESS,
  FETCH_CRUD_TORTAS_FAILURE,
  FETCH_CRUD_TURNOS_MAS_RIESGOSOS_INIT,
  FETCH_CRUD_TURNOS_MAS_RIESGOSOS_SUCCESS,
  FETCH_CRUD_TURNOS_MAS_RIESGOSOS_FAILURE,
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
    case FETCH_CRUD_TORTAS_INIT:
      return {
        ...state,
        loadingTortas: true,
      };
    case FETCH_CRUD_TORTAS_SUCCESS:
      return {
        ...state,
        dataTortas: action.payload.data,
        loadingTortas: false,
        statusTortas: action.payload.status,
      };
    case FETCH_CRUD_TORTAS_FAILURE:
      return {
        ...state,
        dataTortas: {},
        loadingTortas: false,
        statusTortas: 501,
      };
    case FETCH_CRUD_TURNOS_MAS_RIESGOSOS_INIT:
      return {
        ...state,
        loadingTurnosMasRiesgosos: true,
      };
    case FETCH_CRUD_TURNOS_MAS_RIESGOSOS_SUCCESS:
      return {
        ...state,
        dataTurnosMasRiesgosos: action.payload.data,
        loadingTurnosMasRiesgosos: false,
        statusTurnosMasRiesgosos: action.payload.status,
      };
    case FETCH_CRUD_TURNOS_MAS_RIESGOSOS_FAILURE:
      return {
        ...state,
        dataTurnosMasRiesgosos: {},
        loadingTurnosMasRiesgosos: false,
        statusTurnosMasRiesgosos: 501,
      };
    default:
      return state;
  }
}
