import { Card } from '@nextui-org/react'
import React from 'react'
import LatestValueBox, {ColorOK} from './LatestValueBox'
import { LightingAssetTimeSeriesData, MetricMetaData } from '@/utils/typeDefs';
import { camelToTitleCase, customFormatter } from '@/utils/textFormat';
import { findCategoryMap, findDotColor, getNestedProperty } from '../digitalTwin/page';

type LatestValueBarProps = {
      data: LightingAssetTimeSeriesData; //props.sampleData[props.sampleData.length-1]
      metadata: MetricMetaData;
      inSummaryBar: boolean;
};


export default function LatestValuesBar(props: LatestValueBarProps) {


  return (
      <Card className="flex flex-col justify-evenly bg-primary-200 w-3/4 w-full" >
            <div className="py-4 m-auto text-auto">
                  <p className="text-md"> Latest Values</p>
            </div>

            <div className="flex flex-col content-center py-4 px-5 gap-2">
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2'>
                        {Object.entries(props.metadata).map(([metricKey, metaData]) => {
                              const category = findCategoryMap[metricKey]
                              const metricData = getNestedProperty(props.data, [category, metricKey])

                              return (
                                    <LatestValueBox
                                          metricForID={`${metricKey}`} //will be used for modal ... "Go to [...] and close"
                                          tooltipTitle={`${
                                                (category=="illuminance"|| category=="colorTemperature") ? customFormatter(metricKey) : ''} 
                                                ${category ? camelToTitleCase(category) : category}`
                                          }
                                          tooltipContent={metaData.tooltipSummary + ` Health status: ${metricData?.healthStatus}`}
                                          latestValueTitle={`${
                                                (category=="illuminance"|| category=="colorTemperature") ? customFormatter(metricKey) : ''} 
                                                ${category ? camelToTitleCase(category):  category
                                          }`}
                                          latestValueNumber={metricData?.value}  
                                          latestValueUnit={metaData.unit}
                                          dotColor={findDotColor[metricData?.healthStatus]} // Object.keys(metaData.scale).length
                                          inSummaryBar={true}
                                    />
                              )
                        })
                        }
                  </div>
            </div>
      </Card>
  )
}
