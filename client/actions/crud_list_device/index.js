import {
  FETCH_CRUD_LIST_DEVICE_INIT,
  FETCH_CRUD_LIST_DEVICE_SUCCESS,
  FETCH_CRUD_LIST_DEVICE_FAILURE,
  DELETE_CRUD_LIST_DEVICE_INIT,
  DELETE_CRUD_LIST_DEVICE_SUCCESS,
  DELETE_CRUD_LIST_DEVICE_FAILURE,
  RESET_CRUD_LIST_DEVICE,
  RESET_MODAL_CRUD_DEVICE_DELETE,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCrudListDevice() {
  return {
    type: RESET_CRUD_LIST_DEVICE,
  };
}

export function resetModalDeviceDelete() {
  return {
    type: RESET_MODAL_CRUD_DEVICE_DELETE,
  };
}

/* Fetch */

function fetchApiSuccess(data, concat) {
  return {
    type: FETCH_CRUD_LIST_DEVICE_SUCCESS,
    payload: data,
    concat,
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_CRUD_LIST_DEVICE_FAILURE,
    payload: error,
  };
}

function fetchApiInit(load, concat) {
  return {
    type: FETCH_CRUD_LIST_DEVICE_INIT,
    payload: load,
    concat,
  };
}

export function fetchCrudListDevice(data, load, concat) {
  return async dispatch => {
    dispatch(fetchApiInit(load, concat));
    try {
      const resp = await API.data.get(data);
      return dispatch(fetchApiSuccess(resp, concat));
    } catch (error) {
      return dispatch(fetchApiFailure(error));
    }
  };
}

/* Device Delete (Async) */

function deleteApiSuccess(data) {
  return {
    type: DELETE_CRUD_LIST_DEVICE_SUCCESS,
    payload: data,
  };
}

function deleteApiFailure(error) {
  return {
    type: DELETE_CRUD_LIST_DEVICE_FAILURE,
    errordelete: error,
  };
}

function deleteApiInit() {
  return {
    type: DELETE_CRUD_LIST_DEVICE_INIT,
  };
}

export function deleteDevice(data) {
  return async dispatch => {
    dispatch(deleteApiInit());
    try {
      const resp = await API.data.deleteItem(data);
      return dispatch(deleteApiSuccess(resp));
    } catch (error) {
      return dispatch(deleteApiFailure(error));
    }
  };
}
