import React from 'react';
import './Map.css';
import { MapContainer as LeafletMap, TileLayer, useMap } from 'react-leaflet';
import { showDataOnMap } from '../../../utils/showDataOnMap';

const Map = ({ mapCountries, center, zoom, casesType }) => {
  function SetViewOnClick({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetViewOnClick center={center} zoom={zoom} />
        {showDataOnMap(mapCountries, casesType)}
      </LeafletMap>
    </div>
  );
};

export default Map;
