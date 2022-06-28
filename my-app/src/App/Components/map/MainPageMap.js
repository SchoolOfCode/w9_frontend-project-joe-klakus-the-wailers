import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

export default function MainPageMap(props) {
  const [posi, setPosi] = useState();
//Gets the user's location on the browser
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) =>
      setPosi([location.coords.latitude, location.coords.longitude])
    );
  }, []);

  return (
    <div>
      {posi && (
        <MapContainer center={posi} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/*Maps through the events and puts it on the map */}
          {props.events.map((location) => (
            <Marker
              key={location.events_id}
              position={[location.lat, location.long]}
            >
              <Popup>
                {location.start_time}
                <br />
                <strong>{location.name_of_event}</strong>
                <br />
                {location.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}
