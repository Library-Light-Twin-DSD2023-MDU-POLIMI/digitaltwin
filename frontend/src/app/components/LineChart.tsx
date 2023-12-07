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
import { formatDateTimestamp } from '../../utils/timeFormat';
import { camelToTitleCase, customFormatter } from '../../utils/textFormat';
import { LightingAssetTimeSeriesData } from '../../utils/typeDefs';
import { getNestedProperty } from '../digitalTwin/page';




type LineChartProps = {
  data: LightingAssetTimeSeriesData[]; 
  categoryKey: string; // e.g., "illuminance", "glare", ..
  metricKey: string; // e.g., "maintainedAverage", ..
};



export default function LineChart(props: LineChartProps){  

  return (
    <div className='w-full text-center'>
      {`${customFormatter(props.metricKey)} ${camelToTitleCase(props.categoryKey)}`}

      <div>
        <Line 
          data={{
            labels: props.data.map((entry) => formatDateTimestamp(entry.timestamp)), 
            datasets: [
              {
                label: `${customFormatter(props.metricKey)} ${camelToTitleCase(props.categoryKey)}`,
                data: props.data.map((entry) => getNestedProperty(entry, [props.categoryKey, props.metricKey]).value),
                tension: 0.1,
                borderColor: (context) =>{
                  const ctx = context.chart.ctx;
                  const gradient = ctx.createLinearGradient(0, ctx.canvas.height/3, 0, 0); //TODO: want the colors to be relative to thresholds...
                  gradient.addColorStop(1, '#c542f5');
                  gradient.addColorStop(0.70, 'green');
                  gradient.addColorStop(0.30, 'yellow');
                  gradient.addColorStop(0, 'red');
                  return gradient;
                },
              },
            ],
          }}
          options={{
            responsive: true, 
            plugins: {
              tooltip: {
                displayColors: false,
              },
            },
          }} 
        />
      </div>

    </div>
  );
}



// (...) from ${formatDatestamp(props.data[0].timestamp)} to ${formatDatestamp(props.data[props.data.length - 1].timestamp)}