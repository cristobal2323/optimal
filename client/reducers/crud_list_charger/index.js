import initialState from './initialState';
import {
  FETCH_CRUD_LIST_CHARGER_INIT,
  FETCH_CRUD_LIST_CHARGER_SUCCESS,
  FETCH_CRUD_LIST_CHARGER_FAILURE,
  RESET_CRUD_LIST_CHARGER,
  RESET_MODAL_CRUD_CHARGER_DELETE,
  DELETE_CRUD_LIST_CHARGER_INIT,
  DELETE_CRUD_LIST_CHARGER_SUCCESS,
  DELETE_CRUD_LIST_CHARGER_FAILURE,
} from '../../actions/crud_list_charger/types';

export default function listCharger(state = initialState, action) {
  switch (action.type) {
    /* Setting */
    case RESET_CRUD_LIST_CHARGER:
      return {
        ...state,
        data: {},
        loading: true,
        loadingTable: false,
        status: 0,
        count: 0,
      };
    case RESET_MODAL_CRUD_CHARGER_DELETE:
      console.log('q');
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
    case FETCH_CRUD_LIST_CHARGER_INIT:
      return {
        ...state,
        loading: action.payload,
        loadingTable: action.concat ? true : false,
      };
    case FETCH_CRUD_LIST_CHARGER_SUCCESS:
      return {
        ...state,
        data: action.concat
          ? state.data.concat(action.payload.data.response.chargers)
          : action.payload.data.response.chargers,
        count: action.payload.data.response.pagesCount,
        loading: false,
        loadingTable: false,
        status: action.payload.status,
      };
    case FETCH_CRUD_LIST_CHARGER_FAILURE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 501,
      };
    case DELETE_CRUD_LIST_CHARGER_INIT:
      return {
        ...state,
        loadingDelete: true,
      };
    case DELETE_CRUD_LIST_CHARGER_SUCCESS:
      return {
        ...state,
        dataDelete: action.payload.data,
        loadingDelete: false,
        statusDelete: action.payload.status,
      };
    case DELETE_CRUD_LIST_CHARGER_FAILURE:
      return {
        ...state,
        statusDelete: 501,
      };
    default:
      return state;
  }
}
