import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Car from '../../assets/images/taxi.png';
import Charging from '../../assets/images/charging.png';

const CarComponent = ({ text, onModal }) => (
  <div onClick={onModal} className="marker">
    <img src={Car} alt="Car" />
    <div className="hover">
      <div>Patente: {text.patente}</div>
      <div>Flota: {text.flota}</div>
    </div>
  </div>
);
const ChargingComponent = ({ text, onModal }) => (
  <div onClick={onModal} className="marker">
    <img src={Charging} alt="Car" />
    <div className="hover">
      <div>Cargador: {text.nombre}</div>
    </div>
  </div>
);
const createMapOptions = maps => {
  return {
    mapTypeControl: true,
  };
};

const Mapa = props => {
  return (
    // Important! Always set the container height explicitly
    <div className="module--mapa__box">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDOADxpA07sPuMgPUK7pVCT_FYY2Q7x0Co' }}
        defaultCenter={{
          lat: -33.4372,
          lng: -70.6506,
        }}
        defaultZoom={3}
        options={createMapOptions}
      >
        {props.data.response.map((item, i) => {
          if (item.latitud !== null) {
            return (
              <CarComponent
                key={i}
                lat={item.latitude}
                lng={item.longitude}
                text={{ patente: item.vehicleCode, flota: item.fleetName }}
                onModal={props.onModal}
              />
            );
          }
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Mapa;
