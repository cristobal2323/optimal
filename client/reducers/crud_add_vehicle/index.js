import initialState from './initialState';
import {
  SAVE_CRUD_VEHICLE_INIT,
  SAVE_CRUD_VEHICLE_SUCCESS,
  SAVE_CRUD_VEHICLE_FAILURE,
  RESET_CRUD_VEHICLE,
  RESET_MODAL_CRUD_VEHICLE_ADD,
} from '../../actions/crud_add_vehicle/types';

export default function crudAddVehicle(state = initialState, action) {
  switch (action.type) {
    case RESET_CRUD_VEHICLE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 0,
      };
    case RESET_MODAL_CRUD_VEHICLE_ADD:
      return {
        ...state,
        status: 0,
      };
    case SAVE_CRUD_VEHICLE_INIT:
      return {
        ...state,
        loading: true,
      };
    case SAVE_CRUD_VEHICLE_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    }
    case SAVE_CRUD_VEHICLE_FAILURE:
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
