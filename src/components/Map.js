import React from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { json_EU_krajiny_0 } from "../assets/coordinates";

const API_KEY = "82b2b576-7a71-43ff-849f-feeb552493e6";
const themeColor = "rgb(51, 136, 255)";
const hoverColor = "rgb(0, 0, 255)";

function Map() {
  const onEachCountry = (country, layer) => {
    layer.bindPopup(country.properties.NAME);
    layer.on({
      mouseover: (e) => {
        e.target.setStyle({ fillColor: hoverColor });
      },
      mouseout: (e) => {
        e.target.setStyle({ fillColor: themeColor });
      },
    });
  };

  return (
    <MapContainer
      style={{ height: "1000px" }}
      center={[48.30694, 14.28583]}
      zoom={5}
      scrollWheelZoom={true}
      doubleClickZoom={false}
    >
      <GeoJSON
        data={json_EU_krajiny_0.features}
        onEachFeature={(feature, layer) => onEachCountry(feature, layer)}
      />
    </MapContainer>
  );
}

export default Map;
