import React from 'react'
import LightingAssetActions from './LightingAssetActions'
import StatusSummary from './StatusSummary'


interface Asset {
  uid: string
  currentStatus: string
  predictiveStatus: {
    status: string
    predictedTime: number
  }
  location: {
    floor: number
    section: string
    area: string
  }
  cilLevel: number
}


export default function LightingAssetHeader() {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center py-10">
          <div className="flex flex-col text-foreground">
            <p
              className="md:text-4xl text-2xl font-bold"
              id="digital_twin_name"
            >
              Reception Area - North Wing
            </p>
            <p className="text-lg font-italic" id="located_floor">
              5th Floor
            </p>
          </div>
          <LightingAssetActions />
        </div>
        <LightingAssetActions />
      </div>
      <StatusSummary />
    </div>
  )
}
