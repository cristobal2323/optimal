import initialState from './initialState';
import {
  SAVE_CRUD_DRIVER_INIT,
  SAVE_CRUD_DRIVER_SUCCESS,
  SAVE_CRUD_DRIVER_FAILURE,
  RESET_CRUD_DRIVER,
  RESET_MODAL_CRUD_DRIVER_ADD,
} from '../../actions/crud_add_driver/types';

export default function crudAddDriver(state = initialState, action) {
  switch (action.type) {
    case RESET_CRUD_DRIVER:
      return {
        ...state,
        data: {},
        loading: false,
        status: 0,
      };
    case RESET_MODAL_CRUD_DRIVER_ADD:
      return {
        ...state,
        status: 0,
      };
    case SAVE_CRUD_DRIVER_INIT:
      return {
        ...state,
        loading: true,
      };
    case SAVE_CRUD_DRIVER_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    }
    case SAVE_CRUD_DRIVER_FAILURE:
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
