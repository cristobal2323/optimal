import {
  FETCH_LIST_INIT,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  RESET_INDICATORS,
} from './types';
import API from './api';

/* Actions Creators */

export function reset() {
  return {
    type: RESET_INDICATORS,
  };
}

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_LIST_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_LIST_FAILURE,
    payload: error,
  };
}

function fetchApiInit() {
  return {
    type: FETCH_LIST_INIT,
  };
}

export function fetchIndicators(data) {
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
