import { Card, CardHeader, Chip, CardBody, Tooltip } from '@nextui-org/react'
import React from 'react'

export enum ColorOK {
    grey = "default",
    primary = "primary", 
    tooHigh = "secondary" , 
    good = "success" , 
    warning = "warning" , 
    tooLow = "danger"
}

/* 
export enum PlacementOK {
    top = "top",
    bottom = "bottom",
    left = "left", 
    right = "right"
}
*/

interface LatestValueBoxProps {
    tooltipTitle: string, 
    tooltipContent?: string, 
    //tooltipPlacement: PlacementOK,
    latestValueTitle: string, 
    latestValueNumber: number,
    latestValueUnit?: string,
    dotColor: ColorOK, 
    inSummaryBar: boolean
}


export default function LatestValueBox(props: LatestValueBoxProps) {
  return (
    <Card className="flex bg-cyan-950">
        <CardHeader 
            className={props.inSummaryBar ? "px-2 flex flex-col items-center": "px-2 py-2 flex flex-col items-center"}
        >
            <div>
                <Tooltip 
                    showArrow 
                    placement={props.inSummaryBar ? "bottom" : "right"} 
                    color='primary'
                    content={
                        <div className="px-1 py-2">
                            <div className="text-small font-bold">{props.tooltipTitle}</div>
                            <div className="text-tiny">{props.tooltipContent}</div>
                        </div>
                    }
                >
                    <Chip 
                        className={props.inSummaryBar ? "text-sm font-bold content-center": "w-full font-bold content-center"} 
                        color={props.dotColor} 
                        variant="dot" 
                    >
                        {props.latestValueTitle}
                    </Chip>
                </Tooltip>
            </div>
        </CardHeader>
        <CardBody className="items-center flex grid-cols-2">
            <div className="flex grid-cols-2">
                <div>
                    <Chip color="default" variant="light" size="md">{props.latestValueNumber}</Chip>
                </div>
                <div className="py-1 text-xs">
                    {props.latestValueUnit}
                </div>
            </div>
        </CardBody>
    </Card>
  )
}
