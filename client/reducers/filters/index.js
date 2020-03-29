import initialState from './initialState';
import {
  FETCH_DEVICE_FILTER_INIT,
  FETCH_DEVICE_FILTER_SUCCESS,
  FETCH_DEVICE_FILTER_FAILURE,
  FETCH_TYPES_FILTER_INIT,
  FETCH_TYPES_FILTER_SUCCESS,
  FETCH_TYPES_FILTER_FAILURE,
  FETCH_MODELS_FILTER_INIT,
  FETCH_MODELS_FILTER_SUCCESS,
  FETCH_MODELS_FILTER_FAILURE,
  FETCH_FLEET_FILTER_INIT,
  FETCH_FLEET_FILTER_SUCCESS,
  FETCH_FLEET_FILTER_FAILURE,
} from '../../actions/filters/types';

export default function listDriver(state = initialState, action) {
  switch (action.type) {
    case FETCH_DEVICE_FILTER_INIT:
      return {
        ...state,
        loadingDevices: true,
      };
    case FETCH_DEVICE_FILTER_SUCCESS:
      return {
        ...state,
        loadingDevices: false,
        dataDevices: action.payload,
        statusDevices: action.payload.status,
      };
    case FETCH_DEVICE_FILTER_FAILURE:
      return {
        ...state,
        dataDevices: [],
        loadingDevices: false,
        statusDevices: 501,
      };
    case FETCH_TYPES_FILTER_INIT:
      return {
        ...state,
        loadingTypes: true,
      };
    case FETCH_TYPES_FILTER_SUCCESS:
      return {
        ...state,
        loadingTypes: false,
        dataTypes: action.payload,
        statusTypes: action.payload.status,
      };
    case FETCH_TYPES_FILTER_FAILURE:
      return {
        ...state,
        dataTypes: [],
        loadingTypes: false,
        statusTypes: 501,
      };
    case FETCH_MODELS_FILTER_INIT:
      return {
        ...state,
        loadingModels: true,
      };
    case FETCH_MODELS_FILTER_SUCCESS:
      return {
        ...state,
        loadingModels: false,
        dataModels: action.payload,
        statusModels: action.payload.status,
      };
    case FETCH_MODELS_FILTER_FAILURE:
      return {
        ...state,
        dataModels: [],
        loadingModels: false,
        statusModels: 501,
      };
    case FETCH_FLEET_FILTER_INIT:
      return {
        ...state,
        loadingFleet: true,
      };
    case FETCH_FLEET_FILTER_SUCCESS:
      return {
        ...state,
        loadingFleet: false,
        dataFleet: action.payload,
        statusFleet: action.payload.status,
      };
    case FETCH_FLEET_FILTER_FAILURE:
      return {
        ...state,
        dataFleet: [],
        loadingFleet: false,
        statusFleet: 501,
      };
    default:
      return state;
  }
}
