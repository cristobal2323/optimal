import {
  FETCH_CRUD_AREA_TURNOS_INIT,
  FETCH_CRUD_AREA_TURNOS_SUCCESS,
  FETCH_CRUD_AREA_TURNOS_FAILURE,
  RESET_CRUD_HOME,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCrudHome() {
  return {
    type: RESET_CRUD_HOME,
  };
}

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_CRUD_AREA_TURNOS_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_CRUD_AREA_TURNOS_FAILURE,
    payload: error,
  };
}

function fetchApiInit(load) {
  return {
    type: FETCH_CRUD_AREA_TURNOS_INIT,
    payload: load,
  };
}

export function fetchCrudListAreaTurnos(data) {
  return async (dispatch) => {
    dispatch(fetchApiInit());
    try {
      const resp = await API.data.getAreaTurnos(data);
      return dispatch(fetchApiSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiFailure(error));
    }
  };
}
