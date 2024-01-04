'use client'

import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { camelToTitleCase, customFormatter } from '../../utils/textFormat'
import { formatDateTimestamp } from '../../utils/timeFormat'
import { LightingAssetTimeSeriesData } from '../../utils/typeDefs'
import { getNestedProperty } from '../digitalTwin/page'
import { useEffect } from 'react'

ChartJS.register(
  CategoryScale, // x
  LinearScale, // y
  PointElement,
  LineElement,
  Tooltip
)

type LineChartProps = {
  data: LightingAssetTimeSeriesData[]
  categoryKey: string // e.g., "illuminance", "glare", ..
  metricKey: string // e.g., "maintainedAverage", ..
}

const isBrowser = typeof window !== 'undefined'
const isDarkTheme =
  isBrowser && window.matchMedia('(prefers-color-scheme: dark)').matches
const textColor = isDarkTheme ? '#ffffff' : '#000000'

export default function LineChart(props: LineChartProps) {
  //TODO: ensure the reload does not refetch data
  useEffect(() => {
    const handleChanges = () => {
      window.location.reload()
    }
    const themeWatcher = window.matchMedia('(prefers-color-scheme: dark)')

    themeWatcher.addEventListener('change', handleChanges)
    window.addEventListener('resize', handleChanges)

    return () => {
      themeWatcher.removeEventListener('change', handleChanges)
      window.removeEventListener('resize', handleChanges)
    }
  }, [])

  return (
    <div className="w-full text-center">
      {`${customFormatter(props.metricKey)} ${camelToTitleCase(
        props.categoryKey
      )}`}

      <div>
        <Line
          id={props.metricKey + 'LineChart'}
          data={{
            labels: props.data.map(entry =>
              formatDateTimestamp(entry.timestamp)
            ),
            datasets: [
              {
                label: `${customFormatter(props.metricKey)} ${camelToTitleCase(
                  props.categoryKey
                )}`,
                data: props.data.map(
                  entry =>
                    getNestedProperty(entry, [
                      props.categoryKey,
                      props.metricKey,
                    ]).value
                ),
                tension: 0.1,
                borderColor: context => {
                  const ctx = context.chart.ctx
                  const gradient = ctx.createLinearGradient(
                    0,
                    ctx.canvas.height / 3,
                    0,
                    0
                  ) //TODO: want the colors to be relative to thresholds...
                  gradient.addColorStop(1, '#c542f5')
                  gradient.addColorStop(0.7, 'green')
                  gradient.addColorStop(0.3, 'yellow')
                  gradient.addColorStop(0, 'red')
                  return gradient
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
            scales: {
              y: {
                ticks: {
                  color: textColor,
                },
              },
              x: {
                ticks: {
                  color: textColor,
                },
              },
            },
          }}
        />
      </div>
    </div>
  )
}
