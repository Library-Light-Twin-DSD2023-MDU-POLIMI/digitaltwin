import { Card, CardHeader, ButtonGroup, Button, CardBody, Tooltip } from '@nextui-org/react'
import React from 'react'
import LightingAssetActions from './LightingAssetActions'
import StatusSummary from './StatusSummary'


//TODO: add props, add missing imports

export default function LightingAssetHeader() {
  return (
    <div>
        <div className="flex justify-between items-center py-10">
            <div className="flex flex-col text-cyan-950">
                <p className="text-md text-4xl font-bold" id="digital_twin_name">Childrens' Area - Low Table</p>
                <p className="font-italic" id="located_floor">1st Floor</p>
            </div>
            <LightingAssetActions/>
        </div>
        <StatusSummary/>
    </div>
  )
}
