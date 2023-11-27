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
import { formatDateTimestamp, formatDatestamp } from '../../utils/timeFormat';
import { camelToTitleCase} from '../../utils/textFormat';
import { LightingAssetTimeSeriesData } from '../../utils/typeDefs';

 
function getNestedProperty(obj: any, keys: string[]): any {
  return keys.reduce((acc, key) => acc?.[key], obj);
}


type LineChartProps = {
  data: LightingAssetTimeSeriesData[]; 
  categoryKey: string; // e.g., "illuminance", "glare", ..
  metricKey: string; // e.g., "maintainedAverage", ..
};



export default function LineChart(props: LineChartProps){  

  return (
    <div className='text-sky-500 w-full'>
      {`${camelToTitleCase(props.metricKey)} ${camelToTitleCase(props.categoryKey)} from ${formatDatestamp(props.data[0].timestamp)} to ${formatDatestamp(
        props.data[props.data.length - 1].timestamp
      )}`}

      <div>
        <Line 
          data={{
            labels: props.data.map((entry) => formatDateTimestamp(entry.timestamp)), 
            datasets: [
              {
                label: `${props.categoryKey}.${props.metricKey}`,
                data: props.data.map((entry) => getNestedProperty(entry, [props.categoryKey, props.metricKey])),
                tension: 0.1,
                borderColor: (context) =>{
                  const ctx = context.chart.ctx;
                  const gradient = ctx.createLinearGradient(0, ctx.canvas.height/3, 0, 0); //TODO: want the colors to be relative to thresholds...
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
