import React, { useState, useEffect } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { json_EU_krajiny_0 } from "../assets/coordinates";
import axios from "axios";
import _ from "lodash";
import Filters from "./Filters";
import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/actions/countriesActions";

const themeColor = "rgb(51, 136, 255)";
const hoverColor = "rgb(0, 0, 255)";

function Map() {
  const [countriesJSON, setCountriesJSON] = useState();
  const allCountries = useSelector((store) => store.allCountries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  useEffect(() => {
    setMapData(allCountries);
  }, [allCountries]);

  const setMapData = (data) => {
    if (!data) return;
    const mappedData = _.mapValues(_.keyBy(data, "MapCode"), "Price");
    const countriesClone = [];
    _.forEach(_.clone(json_EU_krajiny_0.features), (country) => {
      _.set(
        country,
        "price",
        _.get(mappedData, country.properties.MapCode)?.toString()
      );
      countriesClone.push(country);
    });
    setCountriesJSON(countriesClone);
  };

  const onEachCountry = (country, layer) => {
    country.price
      ? layer.bindTooltip(country.properties.NAME + ": " + country.price, {
          permanent: true,
          opacity: 0.7,
        })
      : layer.bindTooltip("Price unavailable", { permanent: false });

    layer.on({
      mouseover: (e) => {
        e.target.setStyle({ fillColor: hoverColor });
      },
      mouseout: (e) => {
        e.target.setStyle({ fillColor: themeColor });
      },
    });
  };

  if (!countriesJSON) {
    return <>Still loading...</>;
  }

  return (
    <div>
      <MapContainer
        className="map_container"
        style={{ height: "1000px" }}
        center={[48.30694, 14.28583]}
        zoom={5}
        scrollWheelZoom={true}
        doubleClickZoom={false}
      >
        <Filters></Filters>
        <GeoJSON
          data={countriesJSON}
          onEachFeature={(feature, layer) => onEachCountry(feature, layer)}
        />
      </MapContainer>
    </div>
  );
}

export default Map;
