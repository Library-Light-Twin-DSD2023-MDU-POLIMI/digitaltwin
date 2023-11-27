import { Card, CardHeader, Tooltip, Chip, CardBody } from '@nextui-org/react'
import React from 'react'
import LatestValueBox, {ColorOK} from './LatestValueBox'

//TODO: add props, make responsive

export default function LatestValuesBar() {
  return (
    <Card className="flex justify-evenly bg-cyan-950 w-3/4 w-full" >
        <div className="flex py-2 px-2 gap-2">
            <div className="m-auto">
                <p className="text-sm"> Latest Values</p>
            </div>

            <LatestValueBox 
                  tooltipTitle={"What is Illuminance?"}
                  tooltipContent={'Lorem ipsum dolor sit amet'}
                  latestValueTitle={"Illuminance"}
                  latestValueNumber={50}
                  latestValueUnit={"lux"} 
                  dotColor={ColorOK.good}            
            />
            <LatestValueBox 
                  tooltipTitle={"What is Glare?"}
                  tooltipContent={'Lorem ipsum dolor sit amet'}
                  latestValueTitle={"Glare"}
                  latestValueNumber={4.0}
                  dotColor={ColorOK.warning}            
            />
            <LatestValueBox 
                  tooltipTitle={"What is Color Rendering?"}
                  tooltipContent={"Lorem ipsum dolor sit amet"}
                  latestValueTitle={"Color Rendering"}
                  latestValueNumber={180}
                  latestValueUnit={"CRI"} 
                  dotColor={ColorOK.good}            
            />
            <LatestValueBox 
                  tooltipTitle={"What is Temperature?"}
                  tooltipContent={"Lorem ipsum dolor sit amet"}
                  latestValueTitle={"Temperature"}
                  latestValueNumber={5500}
                  latestValueUnit={"K"} 
                  dotColor={ColorOK.warning}            
            />
            <LatestValueBox 
                  tooltipTitle={"What is Flicker?"}
                  tooltipContent={"Lorem ipsum dolor sit amet"}
                  latestValueTitle={"Flicker"}
                  latestValueNumber={24}
                  latestValueUnit={"Hz"} 
                  dotColor={ColorOK.warning}            
            />
            <LatestValueBox 
                  tooltipTitle={"What is Color Preference?"}
                  tooltipContent={"Lorem ipsum dolor sit amet"}
                  latestValueTitle={"Color Preference"}
                  latestValueNumber={78}
                  latestValueUnit={""} 
                  dotColor={ColorOK.tooLow}            
            />
            <LatestValueBox 
                  tooltipTitle={"What is Photo Safety?"}
                  tooltipContent={"Lorem ipsum dolor sit amet"}
                  latestValueTitle={"Photo Safety"}
                  latestValueNumber={1.9}
                  latestValueUnit={""} 
                  dotColor={ColorOK.warning}            
            />

        </div>
    </Card>
  )
}
