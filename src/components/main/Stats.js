import React from 'react';
import './Stats.css';
import InfoBox from "./infobox/InfoBox";
import Map from "./map/Map";

const Stats = ({ countryInfo }) => {

  return (
    <div>
      <div className='stats'>
          <InfoBox title='Coronavirus cases' cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox title='Recovered' cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
          <InfoBox title='Deaths' cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
      </div>
      <Map />
    </div>

  );
};

export default Stats;