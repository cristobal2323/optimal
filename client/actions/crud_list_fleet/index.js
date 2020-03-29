import {
  FETCH_CRUD_LIST_FLEET_INIT,
  FETCH_CRUD_LIST_FLEET_SUCCESS,
  FETCH_CRUD_LIST_FLEET_FAILURE,
  DELETE_CRUD_LIST_FLEET_INIT,
  DELETE_CRUD_LIST_FLEET_SUCCESS,
  DELETE_CRUD_LIST_FLEET_FAILURE,
  RESET_CRUD_LIST_FLEET,
  RESET_MODAL_CRUD_FLEET_DELETE,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCrudListFleet() {
  return {
    type: RESET_CRUD_LIST_FLEET,
  };
}

export function resetModalFleetDelete() {
  return {
    type: RESET_MODAL_CRUD_FLEET_DELETE,
  };
}

/* Fetch */

function fetchApiSuccess(data, concat) {
  return {
    type: FETCH_CRUD_LIST_FLEET_SUCCESS,
    payload: data,
    concat,
  };
}

function fetchApiFailure(error) {
  console.log(error);
  return {
    type: FETCH_CRUD_LIST_FLEET_FAILURE,
    payload: error,
  };
}

function fetchApiInit(load, concat) {
  return {
    type: FETCH_CRUD_LIST_FLEET_INIT,
    payload: load,
    concat,
  };
}

export function fetchCrudListFleet(data, load, concat) {
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

/* Fleet Delete (Async) */

function deleteApiSuccess(data) {
  return {
    type: DELETE_CRUD_LIST_FLEET_SUCCESS,
    payload: data,
  };
}

function deleteApiFailure(error) {
  return {
    type: DELETE_CRUD_LIST_FLEET_FAILURE,
    errordelete: error,
  };
}

function deleteApiInit() {
  return {
    type: DELETE_CRUD_LIST_FLEET_INIT,
  };
}

export function deleteFleet(data) {
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
