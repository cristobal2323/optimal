import {
  FETCH_MAPA_INIT,
  FETCH_MAPA_SUCCESS,
  FETCH_MAPA_FAILURE,
  FETCH_MAPA_VEHICLE_INIT,
  FETCH_MAPA_VEHICLE_SUCCESS,
  FETCH_MAPA_VEHICLE_FAILURE,
  FETCH_MAPA_DEVICE_INIT,
  FETCH_MAPA_DEVICE_SUCCESS,
  FETCH_MAPA_DEVICE_FAILURE,
  RESET_MAPA,
  RESET_MODAL_MAPA,
  FETCH_MAPA_VEHICLE_GRAPH_INIT,
  FETCH_MAPA_VEHICLE_GRAPH_SUCCESS,
  FETCH_MAPA_VEHICLE_GRAPH_FAILURE,
} from './types';
import API from './api';

/* Actions Creators */

export function resetListMapa() {
  return {
    type: RESET_MAPA,
  };
}

export function resetModalMapa() {
  return {
    type: RESET_MODAL_MAPA,
  };
}

/* Fetch */

function fetchApiSuccess(data) {
  return {
    type: FETCH_MAPA_SUCCESS,
    payload: data,
  };
}

function fetchApiFailure(error) {
  return {
    type: FETCH_MAPA_FAILURE,
    payload: error,
  };
}

function fetchApiInit(load) {
  return {
    type: FETCH_MAPA_INIT,
    payload: load,
  };
}

export function fetchListMapa(data, load) {
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

/* MAPA get (Async) */

function fetchApiVehicleSuccess(data) {
  return {
    type: FETCH_MAPA_VEHICLE_SUCCESS,
    payload: data,
  };
}

function fetchApiVehicleFailure(error) {
  return {
    type: FETCH_MAPA_VEHICLE_FAILURE,
    payload: error,
  };
}

function fetchApiVehicleInit(load) {
  return {
    type: FETCH_MAPA_VEHICLE_INIT,
    payload: load,
  };
}

export function getVehicle(data, load) {
  return async dispatch => {
    dispatch(fetchApiVehicleInit(load));
    try {
      const resp = await API.data.getVehicle(data);
      return dispatch(fetchApiVehicleSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiVehicleFailure(error));
    }
  };
}

/* MAPA get (Async) */

function fetchApiDeviceSuccess(data) {
  return {
    type: FETCH_MAPA_DEVICE_SUCCESS,
    payload: data,
  };
}

function fetchApiDeviceFailure(error) {
  return {
    type: FETCH_MAPA_DEVICE_FAILURE,
    payload: error,
  };
}

function fetchApiDeviceInit(load) {
  return {
    type: FETCH_MAPA_DEVICE_INIT,
    payload: load,
  };
}

export function getDevice(data, load) {
  return async dispatch => {
    dispatch(fetchApiDeviceInit(load));
    try {
      const resp = await API.data.getDevice(data);
      return dispatch(fetchApiDeviceSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiDeviceFailure(error));
    }
  };
}

/* MAPA get graph vehicle */

function fetchApiVehicleGraphSuccess(data) {
  return {
    type: FETCH_MAPA_VEHICLE_GRAPH_SUCCESS,
    payload: data,
  };
}

function fetchApiVehicleGraphFailure(error) {
  return {
    type: FETCH_MAPA_VEHICLE_GRAPH_FAILURE,
    payload: error,
  };
}

function fetchApiVehicleGraphInit(load) {
  return {
    type: FETCH_MAPA_VEHICLE_GRAPH_INIT,
    payload: load,
  };
}

export function getVehicleGraph(data, load) {
  return async dispatch => {
    dispatch(fetchApiVehicleGraphInit(load));
    try {
      const resp = await API.data.getVehicleGraph(data);
      return dispatch(fetchApiVehicleGraphSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiVehicleGraphFailure(error));
    }
  };
}
