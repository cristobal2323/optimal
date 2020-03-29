import {
  SAVE_CRUD_VEHICLE_INIT,
  SAVE_CRUD_VEHICLE_SUCCESS,
  SAVE_CRUD_VEHICLE_FAILURE,
  RESET_CRUD_VEHICLE,
  RESET_MODAL_CRUD_VEHICLE_ADD,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCrudVehicle() {
  return {
    type: RESET_CRUD_VEHICLE,
  };
}

export function resetModalCrudVehicleAdd() {
  return {
    type: RESET_MODAL_CRUD_VEHICLE_ADD,
  };
}

/* LOG_IN (Async) */

function saveApiSuccess(data) {
  return {
    type: SAVE_CRUD_VEHICLE_SUCCESS,
    payload: data,
  };
}

function saveApiFailure(data) {
  return {
    type: SAVE_CRUD_VEHICLE_FAILURE,
    payload: data,
  };
}

function saveApiInit() {
  return {
    type: SAVE_CRUD_VEHICLE_INIT,
  };
}

export function addCrudVehicle(data) {
  return async dispatch => {
    dispatch(saveApiInit());
    try {
      const resp = await API.data.add(data);
      return dispatch(saveApiSuccess(resp));
    } catch (error) {
      return dispatch(saveApiFailure(error));
    }
  };
}
