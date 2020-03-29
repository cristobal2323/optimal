import {
  UPDATE_CRUD_DRIVER_INIT,
  UPDATE_CRUD_DRIVER_SUCCESS,
  UPDATE_CRUD_DRIVER_FAILURE,
  RESET_CRUD_DRIVER_UPDATE,
  FETCH_LIST_CRUD_DRIVER_ID_INIT,
  FETCH_LIST_CRUD_DRIVER_ID_SUCCESS,
  FETCH_LIST_CRUD_DRIVER_ID_FAILURE,
  RESET_MODAL_CRUD_DRIVER_UPDATE,
} from './types';
import API from './api';

/* Actions Creators */

export function resetUpdateCrudDriver() {
  return {
    type: RESET_CRUD_DRIVER_UPDATE,
  };
}

export function resetModalCrudDriverUpdate() {
  return {
    type: RESET_MODAL_CRUD_DRIVER_UPDATE,
  };
}

/* LOG_IN (Async) */

function saveApiSuccess(data) {
  return {
    type: UPDATE_CRUD_DRIVER_SUCCESS,
    payload: data,
  };
}

function saveApiFailure(data) {
  return {
    type: UPDATE_CRUD_DRIVER_FAILURE,
    payload: data,
  };
}

function saveApiInit() {
  return {
    type: UPDATE_CRUD_DRIVER_INIT,
  };
}

export function updateCrudDriver(data) {
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

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_LIST_CRUD_DRIVER_ID_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_LIST_CRUD_DRIVER_ID_FAILURE,
    payload: error,
  };
}

function fetchApiInit() {
  return {
    type: FETCH_LIST_CRUD_DRIVER_ID_INIT,
  };
}

export function fetchListCrudDriverId(data) {
  return async dispatch => {
    dispatch(fetchApiInit());
    try {
      const resp = await API.data.get(data);
      return dispatch(fetchApiSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiFailure(error));
    }
  };
}
