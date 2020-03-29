import {
  FETCH_CRUD_LIST_DRIVER_INIT,
  FETCH_CRUD_LIST_DRIVER_SUCCESS,
  FETCH_CRUD_LIST_DRIVER_FAILURE,
  DELETE_CRUD_LIST_DRIVER_INIT,
  DELETE_CRUD_LIST_DRIVER_SUCCESS,
  DELETE_CRUD_LIST_DRIVER_FAILURE,
  RESET_CRUD_LIST_DRIVER,
  RESET_MODAL_CRUD_DRIVER_DELETE,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCrudListDriver() {
  return {
    type: RESET_CRUD_LIST_DRIVER,
  };
}

export function resetModalDriverDelete() {
  return {
    type: RESET_MODAL_CRUD_DRIVER_DELETE,
  };
}

/* Fetch */

function fetchApiSuccess(data, concat) {
  return {
    type: FETCH_CRUD_LIST_DRIVER_SUCCESS,
    payload: data,
    concat,
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_CRUD_LIST_DRIVER_FAILURE,
    payload: error,
  };
}

function fetchApiInit(load, concat) {
  return {
    type: FETCH_CRUD_LIST_DRIVER_INIT,
    payload: load,
    concat,
  };
}

export function fetchCrudListDriver(data, load, concat) {
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

/* Driver Delete (Async) */

function deleteApiSuccess(data) {
  return {
    type: DELETE_CRUD_LIST_DRIVER_SUCCESS,
    payload: data,
  };
}

function deleteApiFailure(error) {
  return {
    type: DELETE_CRUD_LIST_DRIVER_FAILURE,
    errordelete: error,
  };
}

function deleteApiInit() {
  return {
    type: DELETE_CRUD_LIST_DRIVER_INIT,
  };
}

export function deleteDriver(data) {
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
