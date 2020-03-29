import React, { useState, useRef, useCallback } from 'react';
import { Polygon } from '@react-google-maps/api';

const MapContainera = props => {
  // Store Polygon path in state
  let pol = [];
  let first = props.element.split(',');

  first.forEach(poly => {
    let second = poly.split(';');
    pol.push({
      lat: parseFloat(second[0]),
      lng: parseFloat(second[1]),
    });
  });

  console.log(pol);

  const [path, setPath] = useState(pol);

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
      myUpdate = myNewPath;
      props.handleUpdate(myUpdate);
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

  const color = '#FF0000';
  return (
    <Polygon
      onMouseUp={onEdit}
      onDragEnd={onEdit}
      onLoad={onLoad}
      onUnmount={onUnmount}
      editable
      draggable
      path={path}
      options={{
        strokeColor: color,
        fillColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillOpacity: 0.35,
      }}
    />
  );
};

export default MapContainera;
