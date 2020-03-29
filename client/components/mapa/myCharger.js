import React, { useState, useRef, useCallback } from 'react';
import { Polygon, InfoBox, Marker } from '@react-google-maps/api';
import Charging from '../../assets/images/charging.png';

const MapContainera = props => {
  // Store Polygon path in state
  let pol = [];
  let first = props.element.polygon.split(',');

  first.forEach(poly => {
    let second = poly.split(';');
    pol.push({
      lat: parseFloat(second[0]),
      lng: parseFloat(second[1]),
    });
  });

  const [path, setPath] = useState(pol);
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  // Define refs for Polygon instance and listeners
  const polygonRef = useRef(null);
  const listenersRef = useRef([]);

  // Call setPath with new edited path
  const onEdit = useCallback(() => {
    if (polygonRef.current) {
      const nextPath = polygonRef.current
        .getPath()
        .getArray()
        .map(latLng => {
          return { lat: latLng.lat(), lng: latLng.lng() };
        });
      let myNewPath = '';
      nextPath.forEach((value, e) => {
        myNewPath += `${e !== 0 ? ',' : ''}${value.lat};${value.lng}`;
      });
      let myUpdate = props.element;
      myUpdate.polygon = myNewPath;
      setPath(nextPath);
    }
  }, [setPath]);

  // Bind refs to current Polygon and listeners
  const onLoad = useCallback(
    polygon => {
      polygonRef.current = polygon;
      const path = polygon.getPath();
      listenersRef.current.push(
        path.addListener('set_at', onEdit),
        path.addListener('insert_at', onEdit),
        path.addListener('remove_at', onEdit),
      );
    },
    [onEdit],
  );

  // Clean up refs
  const onUnmount = useCallback(() => {
    listenersRef.current.forEach(lis => lis.remove());
    polygonRef.current = null;
  }, []);

  let color = props.index === props.select ? '#FF0000' : '#314086';

  const position = { lat: path[0].lat, lng: path[0].lng };

  const handleMouseOver = e => {
    setShowInfoWindow(true);
  };
  const handleMouseExit = e => {
    setShowInfoWindow(false);
  };

  const options = { closeBoxURL: '', enableEventPropagation: true };
  return (
    <React.Fragment>
      <Polygon
        onMouseUp={onEdit}
        onDragEnd={onEdit}
        onLoad={onLoad}
        onUnmount={onUnmount}
        path={path}
        options={{
          strokeColor: color,
          fillColor: color,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillOpacity: 0.35,
        }}
      />
      <Marker
        position={position}
        onMouseOver={handleMouseOver}
        onFocus={handleMouseOver}
        onMouseOut={handleMouseExit}
        onBlur={handleMouseExit}
        icon={Charging}
      >
        {showInfoWindow && (
          <InfoBox options={options} position={position}>
            <div className="hover--map">
              <h1>Nombre: {props.element.alias}</h1>
            </div>
          </InfoBox>
        )}
      </Marker>
    </React.Fragment>
  );
};

export default MapContainera;
