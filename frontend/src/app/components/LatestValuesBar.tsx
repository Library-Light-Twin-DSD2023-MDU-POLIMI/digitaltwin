import { camelToTitleCase, customFormatter, formatSubscripts } from '@/utils/textFormat'
import { LightingAssetTimeSeriesData, MetricMetaData } from '@/utils/typeDefs'
import { Card, useDisclosure } from '@nextui-org/react'
import {
  findCategoryMap,
  findDotColor,
  getNestedProperty,
} from '../digitalTwin/page'
import LatestValueBox from './LatestValueBox'
import MetricInfoModal from './MetricInfoModal'
import { Fragment, useState } from 'react'

type LatestValueBarProps = {
  data: LightingAssetTimeSeriesData
  metadata: MetricMetaData
  inSummaryBar: boolean
}




export default function LatestValuesBar(props: LatestValueBarProps) {
  const { onClose } = useDisclosure();
  const [openModalKey, setOpenModalKey] = useState<string | null>(null);

  const handleOpenModal = (key: string) => {
    setOpenModalKey(key);
  };

  const handleCloseModal = () => {
    setOpenModalKey(null);
  };


  return (
    <Card className="flex flex-col justify-evenly bg-primary-200 w-3/4 w-full">
      <div className="py-4 m-auto text-auto">
        <p className="text-md"> Latest Values</p>
      </div>

      <div className="flex flex-col content-center py-4 px-5 gap-2">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
          {Object.entries(props.metadata).map(([metricKey, metaData]) => {
            const category = findCategoryMap[metricKey]
            const metricData = getNestedProperty(props.data, [
              category,
              metricKey,
            ])

            return (
              <Fragment key={metricKey}>
                <LatestValueBox
                  //metricForID={`${metricKey}`} //will be used for modal ... "Go to [...] and close"
                  tooltipTitle={`${
                    category == 'illuminance' || category == 'colorTemperature'
                      ? customFormatter(metricKey)
                      : ''
                  } 
                    ${
                      category
                        ? camelToTitleCase(category)
                        : category
                    }`}
                  tooltipContent={
                    metaData.tooltipSummary +
                    ` Health status: ${metricData?.healthStatus}`
                  }
                  latestValueTitle={`${
                    category == 'illuminance' || category == 'colorTemperature'
                      ? customFormatter(metricKey)
                      : ''
                  } 
                    ${
                      category
                        ? camelToTitleCase(category)
                        : category
                    }`}
                  latestValueNumber={metricData?.value}
                  latestValueUnit={formatSubscripts(metaData.unit)}
                  dotColor={findDotColor[metricData?.healthStatus]}
                  inSummaryBar={true}
                  openModal={() => handleOpenModal(metricKey)}  
              />
              <MetricInfoModal 
                  isOpen={openModalKey === metricKey} 
                  onClose={handleCloseModal} 
                  action = {onClose}
                  category={category} 
                  metricKey={metricKey}
                  latestValue={metricData?.value} 
                  unit={formatSubscripts(metaData.unit)} 
                  currentHealthStatus={metricData?.healthStatus}
                  dotColor={findDotColor[metricData?.healthStatus]}
                  scale={metaData.scale} 
                  information={metaData.information} 
                  tooltipSummary={metaData.tooltipSummary}
                  inSummaryBar={true}
                  />
              </Fragment>
            )
          })}
        </div>
      </div>
    </Card>
  )
}

