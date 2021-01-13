import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { options } from '../../../utils/options';
import { buildChartData } from '../../../utils/buildChartData';
import './LineGraph.css';
import { API_LAST_120_DAYS } from '../../../constants/apiKeys';

const LineGraph = ({ casesType = 'cases' }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchedData = async () => {
      await fetch(API_LAST_120_DAYS)
        .then((response) => response.json())
        .then((data) => {
          const chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };
    fetchedData();
  }, [casesType]);

  return (
    <div className="chart">
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: 'rgba(204, 16, 52, 0.5)',
                borderColor: '#CC1034',
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
};

export default LineGraph;
