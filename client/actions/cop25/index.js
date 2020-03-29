import {
  FETCH_COP25_INIT,
  FETCH_COP25_SUCCESS,
  FETCH_COP25_FAILURE,
  RESET_COP25,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCop25() {
  return {
    type: RESET_COP25,
  };
}

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_COP25_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_COP25_FAILURE,
    payload: error,
  };
}

function fetchApiInit(load) {
  return {
    type: FETCH_COP25_INIT,
    payload: load,
  };
}

export function fetchCop25(data, load) {
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
