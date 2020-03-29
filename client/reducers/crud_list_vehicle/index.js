import initialState from './initialState';
import {
  FETCH_CRUD_LIST_VEHICLE_INIT,
  FETCH_CRUD_LIST_VEHICLE_SUCCESS,
  FETCH_CRUD_LIST_VEHICLE_FAILURE,
  RESET_CRUD_LIST_VEHICLE,
  RESET_MODAL_CRUD_VEHICLE_DELETE,
  DELETE_CRUD_LIST_VEHICLE_INIT,
  DELETE_CRUD_LIST_VEHICLE_SUCCESS,
  DELETE_CRUD_LIST_VEHICLE_FAILURE,
} from '../../actions/crud_list_vehicle/types';

export default function listVehicle(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_CRUD_LIST_VEHICLE:
      return {
        ...state,
        data: {},
        loading: true,
        loadingTable: false,
        status: 0,
        count: 0,
      };
    case RESET_MODAL_CRUD_VEHICLE_DELETE:
      return {
        ...state,
        loadingDelete: false,
        statusDelete: 0,
        dataDelete: {},
        data: {},
        loading: true,
        loadingTable: false,
        status: 0,
        count: 0,
      };
    case FETCH_CRUD_LIST_VEHICLE_INIT:
      return {
        ...state,
        loading: action.payload,
        loadingTable: action.concat ? true : false,
      };
    case FETCH_CRUD_LIST_VEHICLE_SUCCESS:
      let data, count;
      if (action.payload.status === 401) {
        data = [];
        count = 0;
      } else {
        data = action.concat
          ? state.data.concat(action.payload.data.response.dtoVehicle)
          : action.payload.data.response.dtoVehicle;
        count = action.payload.data.response.pagesCount;
      }
      return {
        ...state,
        data,
        loading: false,
        count,
        loadingTable: false,
        status: action.payload.status,
      };
    case FETCH_CRUD_LIST_VEHICLE_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 501,
      };
    case DELETE_CRUD_LIST_VEHICLE_INIT:
      return {
        ...state,
        loadingDelete: true,
      };
    case DELETE_CRUD_LIST_VEHICLE_SUCCESS:
      return {
        ...state,
        dataDelete: action.payload.data,
        loadingDelete: false,
        statusDelete: action.payload.status,
      };
    case DELETE_CRUD_LIST_VEHICLE_FAILURE:
      return {
        ...state,
        statusDelete: 501,
      };
    default:
      return state;
  }
}
