import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';

export default function Map(props) {
    let locations = [{lat:52.479780, long:-1.897950},{lat:52.471780, long:-1.896950},{lat:52.474780, long:-1.897850},{lat:52.477780, long:-1.894950}]

    const [posi, setPosi] = useState()
    console.log(props.events)

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(
      location => setPosi([
        location.coords.latitude,
        location.coords.longitude
        
      ])
    )},[])

  return (
    <div>
    
    {posi && 
    <MapContainer center={posi} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {props.events.map((location) =>
    <Marker position={[location.lat, location.long]}>
      <Popup>
        You Are Here <br /> BRUM JS {location.title}
      </Popup>
    </Marker>)}
  </MapContainer>
  }
  </div>
  )
}
