import {
  SAVE_CRUD_DEVICE_INIT,
  SAVE_CRUD_DEVICE_SUCCESS,
  SAVE_CRUD_DEVICE_FAILURE,
  RESET_CRUD_DEVICE,
  RESET_MODAL_CRUD_DEVICE_ADD,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCrudDevice() {
  return {
    type: RESET_CRUD_DEVICE,
  };
}

export function resetModalCrudDeviceAdd() {
  return {
    type: RESET_MODAL_CRUD_DEVICE_ADD,
  };
}

/* LOG_IN (Async) */

function saveApiSuccess(data) {
  return {
    type: SAVE_CRUD_DEVICE_SUCCESS,
    payload: data,
  };
}

function saveApiFailure(data) {
  return {
    type: SAVE_CRUD_DEVICE_FAILURE,
    payload: data,
  };
}

function saveApiInit() {
  return {
    type: SAVE_CRUD_DEVICE_INIT,
  };
}

export function addCrudDevice(data) {
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
