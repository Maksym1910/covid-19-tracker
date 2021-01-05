import React from 'react';
import './Stats.css'
import InfoBox from "./infobox/InfoBox";
import Map from "./map/Map";

const Stats = () => {
  return (
    <div>
      <div className='stats'>
        <InfoBox title='Coronavirus cases' cases={2000} total={3000}/>
        <InfoBox title='Recovered' cases={2000} total={3000}/>
        <InfoBox title='Deaths' cases={2000} total={3000}/>
      </div>
      <Map />
    </div>

  );
};

export default Stats;