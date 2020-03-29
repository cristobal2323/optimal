import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import login from './login';
import indicators from './indicators';
import dashboard from './dashboard';

import mapa from './mapa';
import cop25 from './cop25';
import cop25Reina from './cop25_reina';

import crudListVehicle from './crud_list_vehicle';
import crudAddVehicle from './crud_add_vehicle';
import crudUpdateVehicle from './crud_update_vehicle';

import crudListDriver from './crud_list_driver';
import crudAddDriver from './crud_add_driver';
import crudUpdateDriver from './crud_update_driver';

import crudListDevice from './crud_list_device';
import crudAddDevice from './crud_add_device';
import crudUpdateDevice from './crud_update_device';

import crudListCharger from './crud_list_charger';
import crudAddCharger from './crud_add_charger';
import crudUpdateCharger from './crud_update_charger';

import crudListFleet from './crud_list_fleet';
import crudAddFleet from './crud_add_fleet';
import crudUpdateFleet from './crud_update_fleet';

import filters from './filters';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    dashboard,
    indicators,
    login,
    mapa,
    cop25,
    cop25Reina,
    crudListVehicle,
    crudAddVehicle,
    crudUpdateVehicle,
    crudListDriver,
    crudAddDriver,
    crudUpdateDriver,
    crudListDevice,
    crudAddDevice,
    crudUpdateDevice,
    crudListCharger,
    crudAddCharger,
    crudUpdateCharger,
    crudListFleet,
    crudAddFleet,
    crudUpdateFleet,
    filters,
  });

export default createRootReducer;
