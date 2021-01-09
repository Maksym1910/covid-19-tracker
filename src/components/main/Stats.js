import React from "react";
import "./Stats.css";
import InfoBox from "./infobox/InfoBox";
import Map from "./map/Map";
import "leaflet/dist/leaflet.css";

const Stats = ({ mapCountries, countryInfo, center, zoom }) => {
  return (
    <div>
      <div className="stats">
        <InfoBox
          title="Coronavirus cases"
          cases={countryInfo.todayCases}
          total={countryInfo.cases}
        />
        <InfoBox
          title="Recovered"
          cases={countryInfo.todayRecovered}
          total={countryInfo.recovered}
        />
        <InfoBox
          title="Deaths"
          cases={countryInfo.todayDeaths}
          total={countryInfo.deaths}
        />
      </div>
      <Map mapCountries={mapCountries} center={center} zoom={zoom} />
    </div>
  );
};

export default Stats;
