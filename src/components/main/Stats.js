import React from "react";
import "./Stats.css";
import InfoBox from "./infobox/InfoBox";
import Map from "./map/Map";
import "leaflet/dist/leaflet.css";
import {prettyPrintStat} from "../../utils/prettyPrintStat";

const Stats = ({ mapCountries, countryInfo, center, zoom }) => {
  return (
    <div>
      <div className="stats">
        <InfoBox
          title="Coronavirus cases"
          cases={prettyPrintStat(countryInfo.todayCases)}
          total={prettyPrintStat(countryInfo.cases)}
        />
        <InfoBox
          title="Recovered"
          cases={prettyPrintStat(countryInfo.todayRecovered)}
          total={prettyPrintStat(countryInfo.recovered)}
        />
        <InfoBox
          title="Deaths"
          cases={prettyPrintStat(countryInfo.todayDeaths)}
          total={prettyPrintStat(countryInfo.deaths)}
        />
      </div>
      <Map mapCountries={mapCountries} center={center} zoom={zoom} />
    </div>
  );
};

export default Stats;
