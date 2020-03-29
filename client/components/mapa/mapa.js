import React, { useState, useRef, useCallback } from 'react';
import { LoadScriptNext, GoogleMap } from '@react-google-maps/api';
import MyCharger from './myCharger';
import MyVehicle from './myVehicle';

const MapContainer = props => {
  const [path, setPath] = useState({
    lat: -33.4372,
    lng: -70.6506,
  });

  return (
    <LoadScriptNext
      id="script-loader"
      googleMapsApiKey="AIzaSyDOADxpA07sPuMgPUK7pVCT_FYY2Q7x0Co"
    >
      <GoogleMap mapContainerClassName="App-map" zoom={11} center={path} on>
        {props.dataDevice.map((element, i) => {
          return (
            <MyCharger
              key={element.id}
              i={element.id}
              index={i}
              element={element}
              select={props.dataDevice}
            />
          );
        })}
        {props.dataVehicle.map((element, i) => {
          return (
            <MyVehicle
              onModal={props.onModal}
              handleUpdate={props.handleUpdate}
              key={i}
              element={element}
            />
          );
        })}
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default MapContainer;
