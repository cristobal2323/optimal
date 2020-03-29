import {
  SAVE_CRUD_DRIVER_INIT,
  SAVE_CRUD_DRIVER_SUCCESS,
  SAVE_CRUD_DRIVER_FAILURE,
  RESET_CRUD_DRIVER,
  RESET_MODAL_CRUD_DRIVER_ADD,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCrudDriver() {
  return {
    type: RESET_CRUD_DRIVER,
  };
}

export function resetModalCrudDriverAdd() {
  return {
    type: RESET_MODAL_CRUD_DRIVER_ADD,
  };
}

/* LOG_IN (Async) */

function saveApiSuccess(data) {
  return {
    type: SAVE_CRUD_DRIVER_SUCCESS,
    payload: data,
  };
}

function saveApiFailure(data) {
  return {
    type: SAVE_CRUD_DRIVER_FAILURE,
    payload: data,
  };
}

function saveApiInit() {
  return {
    type: SAVE_CRUD_DRIVER_INIT,
  };
}

export function addCrudDriver(data) {
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
