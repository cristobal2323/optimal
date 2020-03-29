import {
  FETCH_DEVICE_FILTER_INIT,
  FETCH_DEVICE_FILTER_SUCCESS,
  FETCH_DEVICE_FILTER_FAILURE,
  FETCH_MODELS_FILTER_INIT,
  FETCH_MODELS_FILTER_SUCCESS,
  FETCH_MODELS_FILTER_FAILURE,
  FETCH_TYPES_FILTER_INIT,
  FETCH_TYPES_FILTER_SUCCESS,
  FETCH_TYPES_FILTER_FAILURE,
  FETCH_FLEET_FILTER_INIT,
  FETCH_FLEET_FILTER_SUCCESS,
  FETCH_FLEET_FILTER_FAILURE,
} from './types';
import API from './api';

/* Fetch */

function fetchApiSuccessDevice(data) {
  return {
    type: FETCH_DEVICE_FILTER_SUCCESS,
    payload: data,
  };
}

function fetchApiFailureDevice(error) {
  return {
    type: FETCH_DEVICE_FILTER_FAILURE,
    payload: error,
  };
}

function fetchApiInitDevice(loading) {
  return {
    type: FETCH_DEVICE_FILTER_INIT,
    load: loading,
  };
}

export function fetchDeviceFilter(data, loading) {
  return async dispatch => {
    dispatch(fetchApiInitDevice(loading));
    try {
      const resp = await API.data.getDevice(data);
      return dispatch(fetchApiSuccessDevice(resp));
    } catch (error) {
      return dispatch(fetchApiFailureDevice(error));
    }
  };
}

/* Fetch */

function fetchApiSuccessModels(data) {
  return {
    type: FETCH_MODELS_FILTER_SUCCESS,
    payload: data,
  };
}

function fetchApiFailureModels(error) {
  return {
    type: FETCH_MODELS_FILTER_FAILURE,
    payload: error,
  };
}

function fetchApiInitModels(loading) {
  return {
    type: FETCH_MODELS_FILTER_INIT,
    load: loading,
  };
}

export function fetchModelsFilter(data, loading) {
  return async dispatch => {
    dispatch(fetchApiInitModels(loading));
    try {
      const resp = await API.data.getModels(data);
      return dispatch(fetchApiSuccessModels(resp));
    } catch (error) {
      return dispatch(fetchApiFailureModels(error));
    }
  };
}

/* Fetch */

function fetchApiSuccessTypes(data) {
  return {
    type: FETCH_TYPES_FILTER_SUCCESS,
    payload: data,
  };
}

function fetchApiFailureTypes(error) {
  return {
    type: FETCH_TYPES_FILTER_FAILURE,
    payload: error,
  };
}

function fetchApiInitTypes(loading) {
  return {
    type: FETCH_TYPES_FILTER_INIT,
    load: loading,
  };
}

export function fetchTypesFilter(data, loading) {
  return async dispatch => {
    dispatch(fetchApiInitTypes(loading));
    try {
      const resp = await API.data.getTypes(data);
      return dispatch(fetchApiSuccessTypes(resp));
    } catch (error) {
      return dispatch(fetchApiFailureTypes(error));
    }
  };
}

/* Fetch */

function fetchApiSuccessFleet(data) {
  return {
    type: FETCH_FLEET_FILTER_SUCCESS,
    payload: data,
  };
}

function fetchApiFailureFleet(error) {
  return {
    type: FETCH_FLEET_FILTER_FAILURE,
    payload: error,
  };
}

function fetchApiInitFleet(loading) {
  return {
    type: FETCH_FLEET_FILTER_INIT,
    load: loading,
  };
}

export function fetchFleetFilter(data, loading) {
  return async dispatch => {
    dispatch(fetchApiInitFleet(loading));
    try {
      const resp = await API.data.getFleet(data);
      return dispatch(fetchApiSuccessFleet(resp));
    } catch (error) {
      return dispatch(fetchApiFailureFleet(error));
    }
  };
}
