'use client'

import React, { useState } from 'react'
import DigitalTwin from './components/digitalTwin'
import * as userData from './assets.json'
import * as digitalTwin from './digitalTwin.json'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/solid'
import { Button, Input, Select, SelectItem, Textarea, useDisclosure } from '@nextui-org/react'
import AddTwin from './components/addTwin'
import AddTwinModal from './components/AddTwinModal'
import { useMutation, useQuery } from '@apollo/client'
import { ADD_LIGHTING_ASSET } from './_graphQL/Mutations'
import { AddLightingAssetInput } from '@/utils/typeDefs'
import {GET_LIGHTING_ASSETS} from './_graphQL/Queries'


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

interface DigitalTwinAsset {
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

interface AssetData {
  Assets: Asset[]
}

interface DigitalTwinData {
  DigitalTwins: DigitalTwinAsset[]
}

const Home: React.FC = () => {

  
  //Popup functionality for digital twin modal.
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  //Create addDigital Twin mutation
  const [addDigitalTwin] = useMutation(ADD_LIGHTING_ASSET);
  
  
  //Handle add digital twin
  const onAddTwin = (uid: string, currentStatus: string, predictiveStatus: {status: string, predictedTime: Date}, type: string, cilLevel: number , location: {floor: number, section: string, area: string}) => {
     {
      let input: AddLightingAssetInput = {
        uid: uid, 
        currentStatus: currentStatus,
        predictiveStatus: {
          status: predictiveStatus.status,
          predictedTime: predictiveStatus.predictedTime
        },
        type: type,
        cilLevel: cilLevel,
        location: {
          floor: location.floor,
          section: location.section,
          area: location.area
        }
      };
      addDigitalTwin({
        variables: {
          input: input,
        },
      });
    }
  };
  
  const { loading, error, data } = useQuery(GET_LIGHTING_ASSETS, {
    variables: {
      "input": {
        "limit": 0,
        "offset": 0,
        "searchText": ""
      },
      "filter": {
        "currentStatus": null,
        "lightingType": null,
        "location": {
          "area": "",
          "floor": 0,
          "section": ""
        },
        "predictedStatus": null
      }
    }
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
    // Use data to render yor UI
    console.log(JSON.stringify(data) + 'assets');
  
 /*  const [searchQuery, setSearchQuery] = useState('') */


  const digitaltwindata: DigitalTwinData = digitalTwin

 /*  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase())
  }
 */
  /* const filteredAssets = userData.Assets.filter(asset =>
    asset.location.area.toLowerCase().includes(searchQuery)
  ) */
  return (
    <>
      <div className="flex flex-col w-screen content-center ml-[100px]">
        <div
          className="flex flex-row gap-4 bg-slate-300 p-7 rounded-lg"
          style={{
            marginLeft: '100px',
            marginTop: '50px',
            marginRight: '60px',
            marginBottom: '40px',
            width: '400px',
            alignItems: 'center'
          }}
        >
          <Input
            placeholder="Search"
            className="max-w-xs"
          /*   onChange={handleSearchChange} */
            startContent={<MagnifyingGlassIcon className="h-7 w-7" 
            />} />
          <Button
            isIconOnly
            style={{ backgroundColor: '#07C075', color: 'white' }}
            onClick={onOpen}
          >
            <PlusIcon />
          </Button>

          <AddTwinModal
            onOpen={onOpen}
            isOpen={isOpen}
            onClose={onClose}
            onAddTwin={onAddTwin} />
        </div>
        <div style={{
            marginLeft: '50px',
            marginTop: '50px',
            marginRight: '60px',
            marginBottom: '40px',
            width: '800px',
          }}>

      {data.lightingAssets.map((asset: Asset, index: number) => (
        <DigitalTwin asset={asset} />
      ))}
    </div>
      </div></>
  )
}

export default Home
