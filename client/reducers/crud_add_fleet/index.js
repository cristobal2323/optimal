import initialState from './initialState';
import {
  SAVE_CRUD_FLEET_INIT,
  SAVE_CRUD_FLEET_SUCCESS,
  SAVE_CRUD_FLEET_FAILURE,
  RESET_CRUD_FLEET,
  RESET_MODAL_CRUD_FLEET_ADD,
} from '../../actions/crud_add_fleet/types';

export default function crudAddFleet(state = initialState, action) {
  switch (action.type) {
    case RESET_CRUD_FLEET:
      return {
        ...state,
        data: {},
        loading: false,
        status: 0,
      };
    case RESET_MODAL_CRUD_FLEET_ADD:
      return {
        ...state,
        status: 0,
      };
    case SAVE_CRUD_FLEET_INIT:
      return {
        ...state,
        loading: true,
      };
    case SAVE_CRUD_FLEET_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    }
    case SAVE_CRUD_FLEET_FAILURE:
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
