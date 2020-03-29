import initialState from './initialState';
import {
  FETCH_LIST_CRUD_VEHICLE_ID_INIT,
  FETCH_LIST_CRUD_VEHICLE_ID_SUCCESS,
  FETCH_LIST_CRUD_VEHICLE_ID_FAILURE,
  UPDATE_CRUD_VEHICLE_INIT,
  UPDATE_CRUD_VEHICLE_SUCCESS,
  UPDATE_CRUD_VEHICLE_FAILURE,
  RESET_CRUD_VEHICLE_UPDATE,
  RESET_MODAL_CRUD_VEHICLE_UPDATE,
} from '../../actions/crud_update_vehicle/types';

export default function crudUpdateVehicle(state = initialState, action) {
  switch (action.type) {
    case RESET_CRUD_VEHICLE_UPDATE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 0,
        dataItem: {},
        loadingItem: false,
        statusItem: 0,
      };
    case RESET_MODAL_CRUD_VEHICLE_UPDATE:
      return {
        ...state,
        status: 0,
      };
    case FETCH_LIST_CRUD_VEHICLE_ID_INIT:
      return {
        ...state,
        loadingItem: true,
      };
    case FETCH_LIST_CRUD_VEHICLE_ID_SUCCESS:
      return {
        ...state,
        dataItem: action.payload.data,
        loadingItem: false,
        statusItem: action.payload.status,
      };
    case FETCH_LIST_CRUD_VEHICLE_ID_FAILURE:
      return {
        ...state,
        dataItem: {},
        loadingItem: false,
        statusItem: 500,
      };
    case UPDATE_CRUD_VEHICLE_INIT:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_CRUD_VEHICLE_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    }
    case UPDATE_CRUD_VEHICLE_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 500,
      };
    default:
      return state;
  }
}
