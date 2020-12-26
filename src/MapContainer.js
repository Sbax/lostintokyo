import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

const MapContainer = ({ lat, lng }) => (
  <Map center={[lat, lng]} zoom={16}>
    <TileLayer
      attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
      maxZoom={20}
    />
    <Marker position={[lat, lng]} />
  </Map>
);

export default MapContainer;
