import React from 'react';
import InfoBox from "./infobox/InfoBox";

const Stats = () => {
  return (
    <div className='stats'>
      <InfoBox title='Coronavirus cases' cases={2000} total={3000} />
      <InfoBox title='Coronavirus cases' cases={2000} total={3000} />
      <InfoBox title='Coronavirus cases' cases={2000} total={3000} />
    </div>
  );
};

export default Stats;