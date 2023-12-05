'use client'

import React, { useState } from 'react';
import DigitalTwin from './components/digitalTwin';
import * as userData from './assets.json';
import * as digitalTwin from './digitalTwin.json';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/solid';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { DigitalTwinAsset, Asset } from '@/utils/typeDefs';
import AddTwin from './components/addTwin';


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
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 bg-slate-300 p-7 rounded-lg" style={{marginLeft: '50px', marginTop: '50px', marginRight: '60px', marginBottom:'40px'}}>
        <Input placeholder="Search" className="max-w-xs" onChange={handleSearchChange} startContent={<MagnifyingGlassIcon className="h-7 w-7" />} />
        <Button isIconOnly style={{ backgroundColor: '#07C075', color: 'white' }} onPress={toggleAddTwin}>
          <PlusIcon />
        </Button>
      </div>
        {showAddTwin && <AddTwin/>}
      <div className='flex flex-col' style={{marginLeft: '50px'}}>
          {filteredAssets.map((asset) => {
            const twinData = digitaltwindata.DigitalTwins.find(dt => dt.assetId === asset.uid);
            return twinData ? (
              <DigitalTwin key={asset.uid} asset={asset} digitalTwin={twinData} />
              ) : null;
            })}
            </div>  
      </div>
    );
  }
  
  export default Home;




