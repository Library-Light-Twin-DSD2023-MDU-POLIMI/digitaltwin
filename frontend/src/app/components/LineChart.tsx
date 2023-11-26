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
import data from '../../utils/sampleData.json';
import { formatDateTimestamp, formatDatestamp } from '../../utils/timeFormat';

 

export default function LineChart(){  //will rewrite to include params later
  return (
    <div className='text-sky-500 w-full'>
      From {formatDatestamp(data[0].timestamp)} to {formatDatestamp(data[data.length-1].timestamp)} 

      <div>
        <Line 
          data={{
            labels: data.map((entry) => formatDateTimestamp(entry.timestamp)), 
            datasets: [
              {
                label: "Maintained Average Illuminance",
                data: data.map((entry) => entry.illuminance.maintainedAverage),
                tension: 0.1,
                borderColor: (context) =>{
                  const ctx = context.chart.ctx;
                  const gradient = ctx.createLinearGradient(0, ctx.canvas.height/3, 0, 0); //want the colors to be relative to thresholds...
                  gradient.addColorStop(1, 'purple');
                  gradient.addColorStop(0.98, 'green');
                  gradient.addColorStop(0.30, 'yellow');
                  gradient.addColorStop(0, 'red');
                  return gradient;
                },
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
