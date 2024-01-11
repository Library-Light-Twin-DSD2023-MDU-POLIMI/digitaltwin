'use client'

import React, { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Tooltip,
} from '@nextui-org/react'
import { useParams, useRouter } from 'next/navigation'

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

interface AssetProps {
  asset: Asset
}

const DigitalTwin: React.FC<AssetProps> = ({ asset }) => {
    const assetID = asset.uid; 
    const router = useRouter();

    const sendToAssetManager = () => {
      router.push(`/assetManager/${assetID}`);
    }
    

  return (
      <Card
      onClick={sendToAssetManager}
      style={{
        background: '#083344',
        marginBottom: '30px',
        marginRight: '50px',
      }}
    >
      <CardHeader>
        <h6 className="text-2xl leading-tight mr-[375px]">
          {asset.location.area} Area - {asset.location.section}
        </h6>
    </CardHeader>
    <CardBody style={{
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px',
    }}>
        <p className="text-xl italic mt-5">Floor: {asset.location.floor}</p>
        <div className="flex flex-row mt-5">
          <p className="text-l mr-5">Current Status: {asset.currentStatus}</p>
          <p className="text-l mr-5">Predicted Status: {asset.predictiveStatus.status}</p>
          <p className="text-l mr-5">CilLevel: {asset.cilLevel}</p>
        </div>
        <Button style={{
          backgroundColor: '#0891b2',
          marginTop: '20px',
        }}
          onClick={sendToAssetManager}>ASSET MANAGER</Button>
      </CardBody>
      </Card>
      
  )
}


export default DigitalTwin