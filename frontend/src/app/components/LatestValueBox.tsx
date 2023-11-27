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

type LatestValueBoxProps = {
    tooltipTitle: string, 
    tooltipContent?: string, 
    latestValueTitle: string, 
    latestValueNumber: number,
    latestValueUnit?: string,
    dotColor: ColorOK
}


export default function LatestValueBox(props: LatestValueBoxProps) {
  return (
    <Card className="flex bg-cyan-950">
        <CardHeader className="px-1">
            <div>
            <Tooltip showArrow placement="bottom"
                content={
                    <div className="px-1 py-2">
                        <div className="text-small font-bold">{props.tooltipTitle}</div>
                        <div className="text-tiny">{props.tooltipContent}</div>
                    </div>
                }
            >
            <Chip className="text-sm font-bold content-center" color={props.dotColor} variant="dot" >
                {props.latestValueTitle}
            </Chip>
        </Tooltip>
            </div>
            </CardHeader>
        <CardBody className="items-center flex grid-cols-2 py-1">
            <div className="flex grid-cols-2">
                <div>
                    <Chip color="default" variant="light" size="sm">{props.latestValueNumber}</Chip>
                </div>
                <div className="py-1 text-xs">
                    {props.latestValueUnit}
                </div>
            </div>
        </CardBody>
    </Card>
  )
}
