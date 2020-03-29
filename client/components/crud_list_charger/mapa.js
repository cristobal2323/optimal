import React, { useState, useRef, useCallback } from 'react';
import { LoadScriptNext, GoogleMap, Polygon } from '@react-google-maps/api';
import MyPoligon from './myPoligon';

const MapContainer = props => {
  let center = [0, 0];
  if (props.data.length > 0) {
    center = props.data[props.select]
      ? props.data[props.select].polygon.split(',')
      : props.data[0].polygon.split(',');
    center = center[0].split(';');
  }

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
        {props.data.map((element, i) => {
          return (
            <MyPoligon
              handleUpdate={props.handleUpdate}
              key={element.id}
              i={element.id}
              index={i}
              element={element}
              select={props.select}
            />
          );
        })}
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default MapContainer;
