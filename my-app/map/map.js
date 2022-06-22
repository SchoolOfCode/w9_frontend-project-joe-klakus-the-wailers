import L from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet';
import DraggableMarker from './DraggableMarker.js';
import { useState, useEffect } from 'react';

export default function Map() {
    const [posi, setPosi] = useState()

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(
      location => setPosi([
        location.coords.latitude,
        location.coords.longitude
      ])
    )},[])
  console.log(posi)


  return (
    <div>
    <h1>Map</h1>
    {posi && <MapContainer center={posi} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <DraggableMarker center={posi}/>
  </MapContainer>}
  </div>
  )
}
