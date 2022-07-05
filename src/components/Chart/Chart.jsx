import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';
const Chart = ({dataPoints}) => {

      const dataPointValues = dataPoints.map(point => point.value);
      let maxValue = Math.max(...dataPointValues);
      console.log(maxValue);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart