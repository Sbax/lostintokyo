import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

const MapContainer = ({ lat, lng }) => (
  <Map center={[lat, lng]} zoom={16}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[lat, lng]} />
  </Map>
);

export default MapContainer;
