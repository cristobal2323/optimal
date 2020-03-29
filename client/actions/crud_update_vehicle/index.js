import {
  UPDATE_CRUD_VEHICLE_INIT,
  UPDATE_CRUD_VEHICLE_SUCCESS,
  UPDATE_CRUD_VEHICLE_FAILURE,
  RESET_CRUD_VEHICLE_UPDATE,
  FETCH_LIST_CRUD_VEHICLE_ID_INIT,
  FETCH_LIST_CRUD_VEHICLE_ID_SUCCESS,
  FETCH_LIST_CRUD_VEHICLE_ID_FAILURE,
  RESET_MODAL_CRUD_VEHICLE_UPDATE,
} from './types';
import API from './api';

/* Actions Creators */

export function resetUpdateCrudVehicle() {
  return {
    type: RESET_CRUD_VEHICLE_UPDATE,
  };
}

export function resetModalCrudVehicleUpdate() {
  return {
    type: RESET_MODAL_CRUD_VEHICLE_UPDATE,
  };
}

/* LOG_IN (Async) */

function saveApiSuccess(data) {
  return {
    type: UPDATE_CRUD_VEHICLE_SUCCESS,
    payload: data,
  };
}

function saveApiFailure(data) {
  return {
    type: UPDATE_CRUD_VEHICLE_FAILURE,
    payload: data,
  };
}

function saveApiInit() {
  return {
    type: UPDATE_CRUD_VEHICLE_INIT,
  };
}

export function updateCrudVehicle(data) {
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
    type: FETCH_LIST_CRUD_VEHICLE_ID_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_LIST_CRUD_VEHICLE_ID_FAILURE,
    payload: error,
  };
}

function fetchApiInit() {
  return {
    type: FETCH_LIST_CRUD_VEHICLE_ID_INIT,
  };
}

export function fetchListCrudVehicleId(data) {
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
