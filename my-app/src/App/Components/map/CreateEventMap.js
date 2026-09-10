import { MapContainer, TileLayer } from "react-leaflet";
import DraggableMarker from "./DraggableMarker.js";
import { useState, useEffect } from "react";

export default function CreateEventMap({ setlatLong }) {
  const [posi, setPosi] = useState();
  //Gets the user's location from the browser
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) =>
      setPosi([location.coords.latitude, location.coords.longitude])
    );
  }, []);

  return (
    <div>
      {/*Renders the Map */}
      {posi && (
        <MapContainer center={posi} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/*Creates a draggable marker on the map*/}
          <DraggableMarker center={posi} setlatLong={setlatLong} />
        </MapContainer>
      )}
    </div>
  );
}
