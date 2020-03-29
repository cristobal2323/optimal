import initialState from './initialState';
import {
  SAVE_CRUD_DEVICE_INIT,
  SAVE_CRUD_DEVICE_SUCCESS,
  SAVE_CRUD_DEVICE_FAILURE,
  RESET_CRUD_DEVICE,
  RESET_MODAL_CRUD_DEVICE_ADD,
} from '../../actions/crud_add_device/types';

export default function crudAddDevice(state = initialState, action) {
  switch (action.type) {
    case RESET_CRUD_DEVICE:
      return {
        ...state,
        data: {},
        loading: false,
        status: 0,
      };
    case RESET_MODAL_CRUD_DEVICE_ADD:
      return {
        ...state,
        status: 0,
      };
    case SAVE_CRUD_DEVICE_INIT:
      return {
        ...state,
        loading: true,
      };
    case SAVE_CRUD_DEVICE_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: action.payload.status,
      };
    }
    case SAVE_CRUD_DEVICE_FAILURE:
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
