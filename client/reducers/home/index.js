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
  FETCH_CRUD_GRAPH_INIT,
  FETCH_CRUD_GRAPH_SUCCESS,
  FETCH_CRUD_GRAPH_FAILURE,
  FETCH_CRUD_TABLE_INIT,
  FETCH_CRUD_TABLE_SUCCESS,
  FETCH_CRUD_TABLE_FAILURE,
  RESET_CRUD_HOME,
  RESET_HOME_FILTER,
} from '../../actions/home/types';

export default function home(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_CRUD_HOME:
      return {
        ...state,
        dataTortas: {},
        loadingTortas: true,
        statusTortas: 0,
        dataTurnosMasRiesgosos: {},
        loadingTurnosMasRiesgosos: true,
        statusTurnosMasRiesgosos: 0,
        dataGraph: {},
        loadingGraph: true,
        statusGraph: 0,
        dataTable: {},
        loadingTable: true,
        statusTable: 0,
      };
    case RESET_HOME_FILTER:
      return {
        ...state,
        dataAreaTurnos: {},
        loadingAreaTurnos: true,
        statusAreaTurnos: 0,
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
    case FETCH_CRUD_GRAPH_INIT:
      return {
        ...state,
        loadingGraph: true,
      };
    case FETCH_CRUD_GRAPH_SUCCESS:
      return {
        ...state,
        dataGraph: action.payload.data,
        loadingGraph: false,
        statusGraph: action.payload.status,
      };
    case FETCH_CRUD_GRAPH_FAILURE:
      return {
        ...state,
        dataGraph: {},
        loadingGraph: false,
        statusGraph: 501,
      };
    case FETCH_CRUD_TABLE_INIT:
      return {
        ...state,
        loadingTable: true,
      };
    case FETCH_CRUD_TABLE_SUCCESS:
      return {
        ...state,
        dataTable: action.payload.data,
        loadingTable: false,
        statusTable: action.payload.status,
      };
    case FETCH_CRUD_TABLE_FAILURE:
      return {
        ...state,
        dataTable: {},
        loadingTable: false,
        statusTable: 501,
      };
    default:
      return state;
  }
}
