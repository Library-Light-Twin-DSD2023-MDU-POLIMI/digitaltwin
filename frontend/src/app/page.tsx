'use client'

import React, { useState } from 'react';
import DigitalTwin from './components/digitalTwin';
import * as userData from './assets.json';
import * as digitalTwin from './digitalTwin.json';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/solid';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import AddTwin from './components/addTwin';



interface Asset {
  uid: string;
  currentStatus: string;
  predictiveStatus: {
            status: string,
            predictedTime: number
      },
  location : {
      floor: number,
      section: string, 
      area: string
  }
}

interface DigitalTwinAsset {
  timestamp: string,
  assetId: string,
  illuminance: {
    maintainedAverage: number,
    uniformityRatio: number
  },
  glare: {
    UGR: number
  },
  colorRendering: {
    CRI: number
  },
  colorTemperature: {
    CCT: number,
    Duv: number
  },
  flicker: {
    SVM: number
  },
  colorPreference: {
    PVF: number
  },
  photobiologicalSafety: {
    UV: number
  }
}

interface AssetData {
  Assets: Asset[];

}

interface DigitalTwinData {
  DigitalTwins: DigitalTwinAsset[];
}

const Home: React.FC = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const data: AssetData = userData;
    const digitaltwindata: DigitalTwinData = digitalTwin;

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value.toLowerCase());
    };
  
    const filteredAssets = userData.Assets.filter((asset) =>
      asset.location.area.toLowerCase().includes(searchQuery)
    );

    const [showAddTwin, setShowAddTwin] = useState(false);
    const toggleAddTwin = () => {
        setShowAddTwin(!showAddTwin);
    };


  
    return (
      <>
      <div className="flex flex-col">

        <div className="flex flex-col gap-4 bg-slate-300 p-7 rounded-lg" style={{marginLeft: '50px', marginTop: '50px', marginRight: '60px', marginBottom:'40px'}}>
        <Input
          placeholder="Search"
          className="max-w-xs"
          onChange={handleSearchChange}
          startContent={<MagnifyingGlassIcon className="h-7 w-7" />} 
        />
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4" style={{ width: '100%', maxWidth: '1000px' }}>
          <Select
          label="Floor"
          className="max-w-xs"
          >
            <SelectItem key={""}>
              Floor 0
            </SelectItem>
            <SelectItem key={""}>
              Floor 1
            </SelectItem>
            <SelectItem key={""}>
              Floor 2
            </SelectItem>
            <SelectItem key={""}>
              Floor 3
            </SelectItem>
        </Select>

        <Select
          label="Section"
          className="max-w-xs"
        >
          <SelectItem key={""}>
            Section 1
          </SelectItem>
          <SelectItem key={""}>
            Section 2
          </SelectItem>
          <SelectItem key={""}>
            Section 3
          </SelectItem>
        </Select>

        <Select
          label="Current status"
          className="max-w-xs"
        >
          <SelectItem key={""}>
            Good
          </SelectItem>
          <SelectItem key={""}>
            Warning
          </SelectItem>
          <SelectItem key={""}>
            Broke
          </SelectItem>
        </Select>

        <Select
          label="Predicted status"
          className="max-w-xs"
        >
          <SelectItem key={""}>
            Good
          </SelectItem>
          <SelectItem key={""}>
            Warning
          </SelectItem>
          <SelectItem key={""}>
            Broke
          </SelectItem>
        </Select>

        <Select
          label="Critical Level"
          className="max-w-xs"
        >
          <SelectItem key={""}>
            I
          </SelectItem>
          <SelectItem key={""}>
           II
          </SelectItem>
        </Select>

        <Button isIconOnly style={{ backgroundColor: '#07C075', color: 'white' }} onPress={toggleAddTwin}>
          <PlusIcon />
        </Button>
      </div>

        {showAddTwin && <AddTwin/>}
      </div>  
      <div className='flex flex-col' style={{marginLeft: '50px'}}>
          {filteredAssets.map((asset) => {
            const twinData = digitaltwindata.DigitalTwins.find(dt => dt.assetId === asset.uid);
            return twinData ? (
              <DigitalTwin key={asset.uid} asset={asset} digitalTwin={twinData} />
            ) : null;
          })}

      </div>
      </div>
        </>
    );
  }
  
  export default Home;




