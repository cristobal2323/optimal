import initialState from './initialState';
import {
  SAVE_CRUD_CHARGER_INIT,
  SAVE_CRUD_CHARGER_SUCCESS,
  SAVE_CRUD_CHARGER_FAILURE,
  RESET_CRUD_CHARGER,
  RESET_MODAL_CRUD_CHARGER_ADD,
} from '../../actions/crud_add_charger/types';

export default function crudAddCharger(state = initialState, action) {
  switch (action.type) {
    case RESET_CRUD_CHARGER:
      return {
        ...state,
        data: {},
        loading: false,
        status: 0,
      };
    case RESET_MODAL_CRUD_CHARGER_ADD:
      return {
        ...state,
        status: 0,
      };
    case SAVE_CRUD_CHARGER_INIT:
      return {
        ...state,
        loading: true,
      };
    case SAVE_CRUD_CHARGER_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    }
    case SAVE_CRUD_CHARGER_FAILURE:
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
