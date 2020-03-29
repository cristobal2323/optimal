import initialState from './initialState';
import {
  FETCH_MAPA_INIT,
  FETCH_MAPA_SUCCESS,
  FETCH_MAPA_FAILURE,
  RESET_MAPA,
  RESET_MODAL_MAPA,
  FETCH_MAPA_VEHICLE_INIT,
  FETCH_MAPA_VEHICLE_SUCCESS,
  FETCH_MAPA_VEHICLE_FAILURE,
  FETCH_MAPA_DEVICE_INIT,
  FETCH_MAPA_DEVICE_SUCCESS,
  FETCH_MAPA_DEVICE_FAILURE,
  FETCH_MAPA_VEHICLE_GRAPH_INIT,
  FETCH_MAPA_VEHICLE_GRAPH_SUCCESS,
  FETCH_MAPA_VEHICLE_GRAPH_FAILURE,
} from '../../actions/mapa/types';

export default function mapa(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_MAPA:
      return {
        ...state,
        data: {},
        loading: true,
        status: 0,
        dataVehicle: {},
        loadingVehicle: true,
        statusVehicle: 0,
        dataDevice: {},
        loadingDevice: true,
        statusDevice: 0,
      };
    case RESET_MODAL_MAPA:
      return {
        ...state,
        dataVehicleGraph: {},
        loadingVehicleGraph: true,
        statusVehicleGraph: 0,
      };
    case FETCH_MAPA_INIT:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_MAPA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    case FETCH_MAPA_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 501,
      };
    case FETCH_MAPA_VEHICLE_INIT:
      return {
        ...state,
        loadingVehicle: action.payload,
      };
    case FETCH_MAPA_VEHICLE_SUCCESS:
      return {
        ...state,
        dataVehicle: action.payload.data,
        loadingVehicle: false,
        statusVehicle: action.payload.status,
      };
    case FETCH_MAPA_VEHICLE_FAILURE:
      return {
        ...state,
        dataVehicle: {},
        loadingVehicle: false,
        statusVehicle: 501,
      };
    case FETCH_MAPA_DEVICE_INIT:
      return {
        ...state,
        loadingDevice: action.payload,
      };
    case FETCH_MAPA_DEVICE_SUCCESS:
      return {
        ...state,
        dataDevice: action.payload.data,
        loadingDevice: false,
        statusDevice: action.payload.status,
      };
    case FETCH_MAPA_DEVICE_FAILURE:
      return {
        ...state,
        dataDevice: {},
        loadingDevice: false,
        statusDevice: 501,
      };
    case FETCH_MAPA_VEHICLE_GRAPH_INIT:
      return {
        ...state,
        loadingVehicleGraph: true,
      };
    case FETCH_MAPA_VEHICLE_GRAPH_SUCCESS:
      return {
        ...state,
        dataVehicleGraph: action.payload.data,
        loadingVehicleGraph: false,
        statusVehicleGraph: action.payload.status,
      };
    case FETCH_MAPA_VEHICLE_GRAPH_FAILURE:
      return {
        ...state,
        dataVehicleGraph: {},
        loadingVehicleGraph: false,
        statusVehicleGraph: 501,
      };
    default:
      return state;
  }
}
