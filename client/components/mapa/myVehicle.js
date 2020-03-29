import React, { useState, useRef, useCallback } from 'react';
import { InfoBox, Marker } from '@react-google-maps/api';
import Car from '../../assets/images/taxi.png';

const MapContainera = props => {
  // Store Polygon path in state

  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const handleMouseOver = e => {
    setShowInfoWindow(true);
  };
  const handleMouseExit = e => {
    setShowInfoWindow(false);
  };

  const position = {
    lat: props.element.latitude,
    lng: props.element.longitude,
  };
  const options = { closeBoxURL: '', enableEventPropagation: true };
  return (
    <React.Fragment>
      <Marker
        position={position}
        onClick={() => props.onModal(props.element)}
        onMouseOver={handleMouseOver}
        onFocus={handleMouseOver}
        onMouseOut={handleMouseExit}
        onBlur={handleMouseExit}
        icon={Car}
      >
        {showInfoWindow && (
          <InfoBox options={options} position={position}>
            <div className="hover--map">
              <h1>Patente: {props.element.vehicleCode}</h1>
            </div>
          </InfoBox>
        )}
      </Marker>
    </React.Fragment>
  );
};

export default MapContainera;
