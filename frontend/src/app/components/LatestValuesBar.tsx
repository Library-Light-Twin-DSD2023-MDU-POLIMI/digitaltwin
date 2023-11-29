import { Card, CardHeader, Tooltip, Chip, CardBody } from '@nextui-org/react'
import React, { useState } from 'react'
import LatestValueBox, {ColorOK} from './LatestValueBox'

//TODO: add props, make responsive

export default function LatestValuesBar() {

  return (
      <Card className="flex flex-col justify-evenly bg-primary-200 w-3/4 w-full" >
            <div className="py-4 m-auto text-auto">
                  <p className="text-sm"> Latest Values</p>
            </div>
            <div className="flex flex-col content-center py-4 px-5 gap-2">

                  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2'>
                  <LatestValueBox 
                        tooltipTitle={"What is Maintained Average Illuminance?"}
                        tooltipContent={'Illuminance level lighting installations aim to provide'}
                        latestValueTitle={"MA Illuminance"}
                        latestValueNumber={50}
                        latestValueUnit={"lux"} 
                        dotColor={ColorOK.good}       
                        inSummaryBar={true}     
                  />
                  <LatestValueBox 
                        tooltipTitle={"What is Uniformity Ratio Illuminance?"}
                        tooltipContent={'Ratio of minimum to average or maximum illuminance'}
                        latestValueTitle={"UR Illuminance"}
                        latestValueNumber={5.0}
                        latestValueUnit={"lux"} 
                        dotColor={ColorOK.warning}       
                        inSummaryBar={true}     
                  />
                  <LatestValueBox 
                        tooltipTitle={"What is Glare?"}
                        tooltipContent={'Unified Glare Rating (UGR) - Numerical measure of glare in a particular environment'}
                        latestValueTitle={"Glare"}
                        latestValueNumber={4.0}
                        dotColor={ColorOK.warning} 
                        inSummaryBar={true}           
                  />
                  <LatestValueBox 
                        tooltipTitle={"What is Color Rendering?"}
                        tooltipContent={"Measure of light source's ability to reveal colors accurately"}
                        latestValueTitle={"Color Rendering"}
                        latestValueNumber={180}
                        latestValueUnit={"CRI"} 
                        dotColor={ColorOK.good}
                        inSummaryBar={true}            
                  />
                  <LatestValueBox 
                        tooltipTitle={"What is CCT Temperature?"}
                        tooltipContent={"Color appearance of light emitted by a lamp"}
                        latestValueTitle={"CCT Color Temperature"}
                        latestValueNumber={5500}
                        latestValueUnit={"K"} 
                        dotColor={ColorOK.warning}
                        inSummaryBar={true}            
                  />
                  <LatestValueBox 
                        tooltipTitle={"What is Duv Color Temperature?"}
                        tooltipContent={"Deviation from the black-body line in color space"}
                        latestValueTitle={"Duv Color Temperature"}
                        latestValueNumber={0}
                        latestValueUnit={"K"} 
                        dotColor={ColorOK.warning}
                        inSummaryBar={true}            
                  />
                  <LatestValueBox 
                        tooltipTitle={"What is Flicker?"}
                        tooltipContent={"Stroboscopic Visibility Measure (SVM) - Measure of visibility of stroboscopic effects"}
                        latestValueTitle={"Flicker"}
                        latestValueNumber={0.2}
                        latestValueUnit={"Hz"} 
                        dotColor={ColorOK.warning}
                        inSummaryBar={true}            
                  />
                  <LatestValueBox 
                        tooltipTitle={"What is Color Preference?"}
                        tooltipContent={"PVF"}
                        latestValueTitle={"Color Preference"}
                        latestValueNumber={78}
                        latestValueUnit={""} 
                        dotColor={ColorOK.tooLow}
                        inSummaryBar={true}            
                  />
                  <LatestValueBox 
                        tooltipTitle={"What is Photo Safety?"}
                        tooltipContent={"Ultra Violet radiation"}
                        latestValueTitle={"Photo Safety"}
                        latestValueNumber={1.9}
                        latestValueUnit={""} 
                        dotColor={ColorOK.warning}
                        inSummaryBar={true}            
                  />
                  </div>
            </div>
      </Card>
  )
}
