import React from 'react';
import './Stats.css'
import InfoBox from "./infobox/InfoBox";
import Map from "./map/Map";

const Stats = props => {

  return (
    <div>
      <div className='stats'>
        <InfoBox title='Coronavirus cases' cases={props.countryInfo.todayCases} total={props.countryInfo.cases}/>
        <InfoBox title='Recovered' cases={props.countryInfo.todayRecovered} total={props.countryInfo.recovered}/>
        <InfoBox title='Deaths' cases={props.countryInfo.todayDeaths} total={props.countryInfo.deaths}/>
      </div>
      <Map />
    </div>

  );
};

export default Stats;