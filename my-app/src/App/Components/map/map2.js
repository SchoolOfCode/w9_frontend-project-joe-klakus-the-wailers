import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';

export default function Map() {
    let locations = [{lat:51.521, long:-3.2037},{lat:51.520, long:-3.2035},{lat:51.53, long:-3.21},{lat:51.524, long:-3.2045}]

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
    
    {posi && 
    <MapContainer center={posi} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {locations.map((location) =>
    <Marker position={[location.lat, location.long]}>
      <Popup>
        You Are Here <br /> Easily customizable. {location.title}
      </Popup>
    </Marker>)}
  </MapContainer>
  }
  </div>
  )
}
