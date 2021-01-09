import React from "react";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 200,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 300,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 500,
  },
};

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country, index) => (
    <Circle
      key={index}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <h1>Hello</h1>
      </Popup>
    </Circle>
  ));


