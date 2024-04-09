import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: "/placeholder_684908.png",
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

const Map = ({estate}) => {
  const { location_coordinate, estate_title} = estate;
  // console.log(location_coordinate, estate_title);

  return (
    <MapContainer 
      className="h-[300px] md:h-[400px] w-3/4 md:w-2/3 mx-auto rounded-3xl" 
      center={location_coordinate} zoom={13} scrollWheelZoom={false}
    >
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        <Marker position={location_coordinate} icon={customIcon}>
          <Popup>{estate_title}</Popup>
        </Marker>
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;

Map.propTypes = {
  estate: PropTypes.object,
}