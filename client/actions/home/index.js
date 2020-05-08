import {
  FETCH_CRUD_AREA_TURNOS_INIT,
  FETCH_CRUD_AREA_TURNOS_SUCCESS,
  FETCH_CRUD_AREA_TURNOS_FAILURE,
  FETCH_CRUD_TORTAS_INIT,
  FETCH_CRUD_TORTAS_SUCCESS,
  FETCH_CRUD_TORTAS_FAILURE,
  FETCH_CRUD_TURNOS_MAS_RIESGOSOS_INIT,
  FETCH_CRUD_TURNOS_MAS_RIESGOSOS_SUCCESS,
  FETCH_CRUD_TURNOS_MAS_RIESGOSOS_FAILURE,
  FETCH_CRUD_GRAPH_INIT,
  FETCH_CRUD_GRAPH_SUCCESS,
  FETCH_CRUD_GRAPH_FAILURE,
  FETCH_CRUD_TABLE_INIT,
  FETCH_CRUD_TABLE_SUCCESS,
  FETCH_CRUD_TABLE_FAILURE,
  FETCH_CRUD_TABLE_COUNT_INIT,
  FETCH_CRUD_TABLE_COUNT_SUCCESS,
  FETCH_CRUD_TABLE_COUNT_FAILURE,
  RESET_CRUD_HOME,
  RESET_HOME_FILTER,
} from './types';
import API from './api';

/* Actions Creators */

export function resetCrudHome() {
  return {
    type: RESET_CRUD_HOME,
  };
}

export function resetHomeFilter() {
  return {
    type: RESET_HOME_FILTER,
  };
}

/* Fetch turnos */

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

/* Fetch tortas */

function fetchApiTortasSuccess(data) {
  return {
    type: FETCH_CRUD_TORTAS_SUCCESS,
    payload: data,
  };
}

function fetchApiTortasFailure(error) {
  return {
    type: FETCH_CRUD_TORTAS_FAILURE,
    payload: error,
  };
}

function fetchApiTortasInit(load) {
  return {
    type: FETCH_CRUD_TORTAS_INIT,
    payload: load,
  };
}

export function fetchCrudListTortas(data) {
  return async (dispatch) => {
    dispatch(fetchApiTortasInit());
    try {
      const resp = await API.data.postTortas(data);
      return dispatch(fetchApiTortasSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiTortasFailure(error));
    }
  };
}

/* Fetch turnos mas riesgosos */

function fetchApiTurnosMasRiesgososSuccess(data) {
  return {
    type: FETCH_CRUD_TURNOS_MAS_RIESGOSOS_SUCCESS,
    payload: data,
  };
}

function fetchApiTurnosMasRiesgososFailure(error) {
  return {
    type: FETCH_CRUD_TURNOS_MAS_RIESGOSOS_FAILURE,
    payload: error,
  };
}

function fetchApiTurnosMasRiesgososInit(load) {
  return {
    type: FETCH_CRUD_TURNOS_MAS_RIESGOSOS_INIT,
    payload: load,
  };
}

export function fetchCrudListTurnosMasRiesgosos(data) {
  return async (dispatch) => {
    dispatch(fetchApiTurnosMasRiesgososInit());
    try {
      const resp = await API.data.postTurnosMasRiesgosos(data);
      return dispatch(fetchApiTurnosMasRiesgososSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiTurnosMasRiesgososFailure(error));
    }
  };
}

/* Fetch graph */

function fetchApiGraphSuccess(data) {
  return {
    type: FETCH_CRUD_GRAPH_SUCCESS,
    payload: data,
  };
}

function fetchApiGraphFailure(error) {
  return {
    type: FETCH_CRUD_GRAPH_FAILURE,
    payload: error,
  };
}

function fetchApiGraphInit(load) {
  return {
    type: FETCH_CRUD_GRAPH_INIT,
    payload: load,
  };
}

export function fetchCrudListGraph(data) {
  return async (dispatch) => {
    dispatch(fetchApiGraphInit());
    try {
      const resp = await API.data.postGraph(data);
      return dispatch(fetchApiGraphSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiGraphFailure(error));
    }
  };
}

/* Fetch table */

function fetchApiTableSuccess(data) {
  return {
    type: FETCH_CRUD_TABLE_SUCCESS,
    payload: data,
  };
}

function fetchApiTableFailure(error) {
  return {
    type: FETCH_CRUD_TABLE_FAILURE,
    payload: error,
  };
}

function fetchApiTableInit(load) {
  return {
    type: FETCH_CRUD_TABLE_INIT,
    payload: load,
  };
}

export function fetchCrudListTable(data) {
  return async (dispatch) => {
    dispatch(fetchApiTableInit());
    try {
      const resp = await API.data.postTable(data);
      return dispatch(fetchApiTableSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiTableFailure(error));
    }
  };
}

/* Fetch table count */

function fetchApiTableCountSuccess(data) {
  return {
    type: FETCH_CRUD_TABLE_COUNT_SUCCESS,
    payload: data,
  };
}

function fetchApiTableCountFailure(error) {
  return {
    type: FETCH_CRUD_TABLE_COUNT_FAILURE,
    payload: error,
  };
}

function fetchApiTableCountInit(load) {
  return {
    type: FETCH_CRUD_TABLE_COUNT_INIT,
    payload: load,
  };
}

export function fetchCrudListTableCount(data) {
  return async (dispatch) => {
    dispatch(fetchApiTableCountInit());
    try {
      const resp = await API.data.postTableCount(data);
      return dispatch(fetchApiTableCountSuccess(resp));
    } catch (error) {
      return dispatch(fetchApiTableCountFailure(error));
    }
  };
}
