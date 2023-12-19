'use client'

import { Card, CardBody, Chip } from '@nextui-org/react'
import React from 'react'

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
}

interface DigitalTwin {
  timestamp: string
  assetId: string
  illuminance: {
    maintainedAverage: number
    uniformityRatio: number
  }
  glare: {
    UGR: number
  }
  colorRendering: {
    CRI: number
  }
  colorTemperature: {
    CCT: number
    Duv: number
  }
  flicker: {
    SVM: number
  }
  colorPreference: {
    PVF: number
  }
  photobiologicalSafety: {
    UV: number
  }
}

interface AssetProps {
  asset: Asset
  digitalTwin: DigitalTwin
}

const DigitalTwin: React.FC<AssetProps> = ({ asset, digitalTwin }) => {
  return (
    <>
      <Card
        style={{
          background: '#E8E8E8',
          marginBottom: '30px',
          marginRight: '50px',
        }}
      >
        <CardBody>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            <h6 className="text-2xl leading-tight">
              {asset.location.area} Area - {asset.location.section}
            </h6>
            <p className="text-l italic">{asset.location.floor} Floor</p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '10px',
              }}
            >
              <Chip color="success" className="w-40" variant="dot">
                Current Status
              </Chip>
              <Chip color="warning" className="w-40 " variant="dot">
                Predicted Status
              </Chip>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
              }}
            >
              <p className="py-1 text-xs text-center">LUX</p>
              <var className="text-center">
                {digitalTwin.illuminance.uniformityRatio}
              </var>
              <Chip color="warning" variant="dot">
                Illuminance
              </Chip>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
              }}
            >
              <p style={{ color: '#E8E8E8' }}>.</p>
              <var className="text-center">{digitalTwin.glare.UGR}</var>
              <Chip color="warning" variant="dot">
                Glare
              </Chip>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
              }}
            >
              <p className="py-1 text-xs text-center">CRI</p>
              <var className="text-center">
                {digitalTwin.colorRendering.CRI}
              </var>
              <Chip color="success" variant="dot">
                Color Rendering
              </Chip>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
              }}
            >
              <p className="py-1 text-xs text-center">K</p>
              <var className="text-center">
                {digitalTwin.colorTemperature.Duv}
              </var>
              <Chip color="warning" variant="dot">
                Color Temperature
              </Chip>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
              }}
            >
              <p className="py-1 text-xs text-center">Hz</p>
              <var className="text-center">{digitalTwin.flicker.SVM}</var>
              <Chip color="warning" variant="dot">
                Flicker
              </Chip>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
              }}
            >
              <p style={{ color: '#E8E8E8' }}>.</p>
              <var className="text-center">
                {digitalTwin.colorPreference.PVF}
              </var>
              <Chip color="warning" variant="dot">
                Color Preference
              </Chip>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
              }}
            >
              <p style={{ color: '#E8E8E8' }}>.</p>
              <var className="text-center">
                {digitalTwin.photobiologicalSafety.UV}
              </var>
              <Chip color="warning" variant="dot">
                Photobiological Safety
              </Chip>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default DigitalTwin
