'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement, 
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, // x
  LinearScale, // y
  PointElement,
  LineElement,
  Tooltip
);
import data from '../../data/sampleData.json';



const formatTimestamp = (timestamp: string): string => {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).format(new Date(timestamp))
}



export default function LineChart(){ 
  return (
    <div className='text-sky-500'>
      Data Range: {formatTimestamp(data[0].timestamp)} to {formatTimestamp(data[data.length-1].timestamp)}

      <div>
        <Line 
          data={{
            labels: data.map((entry) => formatTimestamp(entry.timestamp)), 
            datasets: [
              {
                label: "Maintained Average Illuminance",
                data: data.map((entry) => entry.illuminance.maintainedAverage),
                tension: 0.1,
                borderColor: "green",
                fill: true,
                backgroundColor: "green", 
              },
            ],
          }}
          options={{
            responsive: true
          }} 
        />
      </div>

    </div>
  );
}
