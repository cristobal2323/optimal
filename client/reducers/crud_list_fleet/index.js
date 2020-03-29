import initialState from './initialState';
import {
  FETCH_CRUD_LIST_FLEET_INIT,
  FETCH_CRUD_LIST_FLEET_SUCCESS,
  FETCH_CRUD_LIST_FLEET_FAILURE,
  RESET_CRUD_LIST_FLEET,
  RESET_MODAL_CRUD_FLEET_DELETE,
  DELETE_CRUD_LIST_FLEET_INIT,
  DELETE_CRUD_LIST_FLEET_SUCCESS,
  DELETE_CRUD_LIST_FLEET_FAILURE,
} from '../../actions/crud_list_fleet/types';

export default function listFleet(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_CRUD_LIST_FLEET:
      return {
        ...state,
        data: {},
        loading: true,
        loadingTable: false,
        status: 0,
        count: 0,
      };
    case RESET_MODAL_CRUD_FLEET_DELETE:
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
    case FETCH_CRUD_LIST_FLEET_INIT:
      return {
        ...state,
        loading: action.payload,
        loadingTable: action.concat ? true : false,
      };
    case FETCH_CRUD_LIST_FLEET_SUCCESS:
      let data, count;
      if (action.payload.status === 401) {
        data = [];
        count = 0;
      } else {
        data = action.concat
          ? state.data.concat(action.payload.data.response.fleets)
          : action.payload.data.response.fleets;
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
    case FETCH_CRUD_LIST_FLEET_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 501,
      };
    case DELETE_CRUD_LIST_FLEET_INIT:
      return {
        ...state,
        loadingDelete: true,
      };
    case DELETE_CRUD_LIST_FLEET_SUCCESS:
      return {
        ...state,
        dataDelete: action.payload.data,
        loadingDelete: false,
        statusDelete: action.payload.status,
      };
    case DELETE_CRUD_LIST_FLEET_FAILURE:
      return {
        ...state,
        statusDelete: 501,
      };
    default:
      return state;
  }
}
