import initialState from './initialState';
import {
  FETCH_CRUD_LIST_DEVICE_INIT,
  FETCH_CRUD_LIST_DEVICE_SUCCESS,
  FETCH_CRUD_LIST_DEVICE_FAILURE,
  RESET_CRUD_LIST_DEVICE,
  RESET_MODAL_CRUD_DEVICE_DELETE,
  DELETE_CRUD_LIST_DEVICE_INIT,
  DELETE_CRUD_LIST_DEVICE_SUCCESS,
  DELETE_CRUD_LIST_DEVICE_FAILURE,
} from '../../actions/crud_list_device/types';

export default function listDevice(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_CRUD_LIST_DEVICE:
      return {
        ...state,
        data: {},
        loading: true,
        loadingTable: false,
        status: 0,
        count: 0,
      };
    case RESET_MODAL_CRUD_DEVICE_DELETE:
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
    case FETCH_CRUD_LIST_DEVICE_INIT:
      return {
        ...state,
        loading: action.payload,
        loadingTable: action.concat ? true : false,
      };
    case FETCH_CRUD_LIST_DEVICE_SUCCESS:
      let data, count;
      if (action.payload.status === 401) {
        data = [];
        count = 0;
      } else {
        data = action.concat
          ? state.data.concat(action.payload.data.response.devices)
          : action.payload.data.response.devices;
        count = action.payload.data.response.pagesCount;
      }
      return {
        ...state,
        data,
        count,
        loading: false,
        loadingTable: false,
        status: action.payload.status,
      };
    case FETCH_CRUD_LIST_DEVICE_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 501,
      };
    case DELETE_CRUD_LIST_DEVICE_INIT:
      return {
        ...state,
        loadingDelete: true,
      };
    case DELETE_CRUD_LIST_DEVICE_SUCCESS:
      return {
        ...state,
        dataDelete: action.payload.data,
        loadingDelete: false,
        statusDelete: action.payload.status,
      };
    case DELETE_CRUD_LIST_DEVICE_FAILURE:
      return {
        ...state,
        statusDelete: 501,
      };
    default:
      return state;
  }
}
