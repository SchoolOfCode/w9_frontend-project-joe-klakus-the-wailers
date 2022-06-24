import L from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet';
import DraggableMarker from './DraggableMarker.js';
import { useState, useEffect } from 'react';

export default function Map({setlatLong}) {
    const [posi, setPosi] = useState()

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(
      location => setPosi([
        location.coords.latitude,
        location.coords.longitude
      ])
    )},[])


  return (
    <div>
    
    {posi && <MapContainer center={posi} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <DraggableMarker center={posi} setlatLong={setlatLong}/>
  </MapContainer>}
  </div>
  )
}
