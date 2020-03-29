import {
  FETCH_CRUD_LIST_VEHICLE_INIT,
  FETCH_CRUD_LIST_VEHICLE_SUCCESS,
  FETCH_CRUD_LIST_VEHICLE_FAILURE,
  DELETE_CRUD_LIST_VEHICLE_INIT,
  DELETE_CRUD_LIST_VEHICLE_SUCCESS,
  DELETE_CRUD_LIST_VEHICLE_FAILURE,
  RESET_CRUD_LIST_VEHICLE,
  RESET_MODAL_CRUD_VEHICLE_DELETE,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCrudListVehicle() {
  return {
    type: RESET_CRUD_LIST_VEHICLE,
  };
}

export function resetModalVehicleDelete() {
  return {
    type: RESET_MODAL_CRUD_VEHICLE_DELETE,
  };
}

/* Fetch */

function fetchApiSuccess(data, concat) {
  return {
    type: FETCH_CRUD_LIST_VEHICLE_SUCCESS,
    payload: data,
    concat,
  };
}

function fetchApiFailure(error) {
  console.log(error);
  return {
    type: FETCH_CRUD_LIST_VEHICLE_FAILURE,
    payload: error,
  };
}

function fetchApiInit(load, concat) {
  return {
    type: FETCH_CRUD_LIST_VEHICLE_INIT,
    payload: load,
    concat,
  };
}

export function fetchCrudListVehicle(data, load, concat) {
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

/* Vehicle Delete (Async) */

function deleteApiSuccess(data) {
  return {
    type: DELETE_CRUD_LIST_VEHICLE_SUCCESS,
    payload: data,
  };
}

function deleteApiFailure(error) {
  return {
    type: DELETE_CRUD_LIST_VEHICLE_FAILURE,
    errordelete: error,
  };
}

function deleteApiInit() {
  return {
    type: DELETE_CRUD_LIST_VEHICLE_INIT,
  };
}

export function deleteVehicle(data) {
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
