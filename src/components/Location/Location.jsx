import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Location = () => {
  const position = [51.505, -0.09]

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={position}>
          <useMap></useMap>
        </Marker>
      </MapContainer>
  );
};

export default Location;