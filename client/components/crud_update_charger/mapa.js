import React, { useState, useRef, useCallback } from 'react';
import { LoadScriptNext, GoogleMap, Polygon } from '@react-google-maps/api';
import MyPoligon from './myPoligon';

const MapContainer = props => {
  let center = [0, 0];
  center = props.data.split(';');

  return (
    <LoadScriptNext
      id="script-loader"
      googleMapsApiKey="AIzaSyDOADxpA07sPuMgPUK7pVCT_FYY2Q7x0Co"
    >
      <GoogleMap
        mapContainerClassName="App-map"
        zoom={14}
        center={{
          lat: parseFloat(center[0]),
          lng: parseFloat(center[1]),
        }}
        on
      >
        <MyPoligon handleUpdate={props.handleUpdate} element={props.data} />
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default MapContainer;
