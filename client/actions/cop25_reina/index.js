import {
  FETCH_COP25_REINA_INIT,
  FETCH_COP25_REINA_SUCCESS,
  FETCH_COP25_REINA_FAILURE,
  RESET_COP25_REINA,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCop25Reina() {
  return {
    type: RESET_COP25_REINA,
  };
}

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_COP25_REINA_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_COP25_REINA_FAILURE,
    payload: error,
  };
}

function fetchApiInit(load) {
  return {
    type: FETCH_COP25_REINA_INIT,
    payload: load,
  };
}

export function fetchCop25Reina(data, load) {
  return async dispatch => {
    dispatch(fetchApiInit(load));
    try {
      const resp = await API.data.get(data);
      return dispatch(fetchApiSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiFailure(error));
    }
  };
}
