import React from 'react';
import './Stats.css';
import InfoBox from './infobox/InfoBox';
import Map from './map/Map';
import 'leaflet/dist/leaflet.css';
import { prettyPrintStat } from '../../utils/prettyPrintStat';

const Stats = ({
  mapCountries,
  countryInfo,
  center,
  zoom,
  casesType,
  setCasesType,
}) => {
  return (
    <div>
      <div className="stats">
        <InfoBox
          onClick={() => setCasesType('cases')}
          title="Coronavirus cases"
          cases={prettyPrintStat(countryInfo.todayCases)}
          total={prettyPrintStat(countryInfo.cases)}
        />
        <InfoBox
          onClick={() => setCasesType('recovered')}
          title="Recovered"
          cases={prettyPrintStat(countryInfo.todayRecovered)}
          total={prettyPrintStat(countryInfo.recovered)}
        />
        <InfoBox
          onClick={() => setCasesType('deaths')}
          title="Deaths"
          cases={prettyPrintStat(countryInfo.todayDeaths)}
          total={prettyPrintStat(countryInfo.deaths)}
        />
      </div>
      <Map
        mapCountries={mapCountries}
        center={center}
        zoom={zoom}
        casesType={casesType}
      />
    </div>
  );
};

export default Stats;
