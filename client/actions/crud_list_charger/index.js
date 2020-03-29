import {
  FETCH_CRUD_LIST_CHARGER_INIT,
  FETCH_CRUD_LIST_CHARGER_SUCCESS,
  FETCH_CRUD_LIST_CHARGER_FAILURE,
  DELETE_CRUD_LIST_CHARGER_INIT,
  DELETE_CRUD_LIST_CHARGER_SUCCESS,
  DELETE_CRUD_LIST_CHARGER_FAILURE,
  RESET_CRUD_LIST_CHARGER,
  RESET_MODAL_CRUD_CHARGER_DELETE,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCrudListCharger() {
  return {
    type: RESET_CRUD_LIST_CHARGER,
  };
}

export function resetModalChargerDelete() {
  return {
    type: RESET_MODAL_CRUD_CHARGER_DELETE,
  };
}

/* Fetch */

function fetchApiSuccess(data, concat) {
  return {
    type: FETCH_CRUD_LIST_CHARGER_SUCCESS,
    payload: data,
    concat,
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_CRUD_LIST_CHARGER_FAILURE,
    payload: error,
  };
}

function fetchApiInit(load, concat) {
  return {
    type: FETCH_CRUD_LIST_CHARGER_INIT,
    payload: load,
    concat,
  };
}

export function fetchCrudListCharger(data, load, concat) {
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

/* Charger Delete (Async) */

function deleteApiSuccess(data) {
  return {
    type: DELETE_CRUD_LIST_CHARGER_SUCCESS,
    payload: data,
  };
}

function deleteApiFailure(error) {
  return {
    type: DELETE_CRUD_LIST_CHARGER_FAILURE,
    errordelete: error,
  };
}

function deleteApiInit() {
  return {
    type: DELETE_CRUD_LIST_CHARGER_INIT,
  };
}

export function deleteCharger(data) {
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
