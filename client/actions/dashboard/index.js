import {
  FETCH_DASHBOARD_INIT,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_FAILURE,
  RESET_DASHBOARD,
} from './types';
import API from './api';

/* Actions Creators */

export function reset() {
  return {
    type: RESET_DASHBOARD,
  };
}

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_DASHBOARD_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_DASHBOARD_FAILURE,
    payload: error,
  };
}

function fetchApiInit(loading) {
  return {
    type: FETCH_DASHBOARD_INIT,
    load: loading,
  };
}

export function fetchInfo(data, loading) {
  return async dispatch => {
    dispatch(fetchApiInit(loading));
    try {
      const resp = await API.data.get(data);
      return dispatch(fetchApiSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiFailure(error));
    }
  };
}
