import {
  SAVE_CRUD_FLEET_INIT,
  SAVE_CRUD_FLEET_SUCCESS,
  SAVE_CRUD_FLEET_FAILURE,
  RESET_CRUD_FLEET,
  RESET_MODAL_CRUD_FLEET_ADD,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCrudFleet() {
  return {
    type: RESET_CRUD_FLEET,
  };
}

export function resetModalCrudFleetAdd() {
  return {
    type: RESET_MODAL_CRUD_FLEET_ADD,
  };
}

/* LOG_IN (Async) */

function saveApiSuccess(data) {
  return {
    type: SAVE_CRUD_FLEET_SUCCESS,
    payload: data,
  };
}

function saveApiFailure(data) {
  return {
    type: SAVE_CRUD_FLEET_FAILURE,
    payload: data,
  };
}

function saveApiInit() {
  return {
    type: SAVE_CRUD_FLEET_INIT,
  };
}

export function addCrudFleet(data) {
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
