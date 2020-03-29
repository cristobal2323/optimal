import {
  SAVE_CRUD_CHARGER_INIT,
  SAVE_CRUD_CHARGER_SUCCESS,
  SAVE_CRUD_CHARGER_FAILURE,
  RESET_CRUD_CHARGER,
  RESET_MODAL_CRUD_CHARGER_ADD,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCrudCharger() {
  return {
    type: RESET_CRUD_CHARGER,
  };
}

export function resetModalCrudChargerAdd() {
  return {
    type: RESET_MODAL_CRUD_CHARGER_ADD,
  };
}

/* LOG_IN (Async) */

function saveApiSuccess(data) {
  return {
    type: SAVE_CRUD_CHARGER_SUCCESS,
    payload: data,
  };
}

function saveApiFailure(data) {
  return {
    type: SAVE_CRUD_CHARGER_FAILURE,
    payload: data,
  };
}

function saveApiInit() {
  return {
    type: SAVE_CRUD_CHARGER_INIT,
  };
}

export function addCrudCharger(data) {
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
