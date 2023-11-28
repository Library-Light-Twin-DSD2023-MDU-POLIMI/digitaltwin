'use client'

import React from 'react';
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";
import {Select, SelectSection, SelectItem, Input, Button} from "@nextui-org/react";


export default function FilterDigitalTwin() {


    return(
      <div className="flex flex-col gap-4 bg-slate-300 p-7 rounded-lg" style={{marginLeft: '80px', marginTop: '50px', marginRight: '60px', marginBottom:'40px'}}>
        <Input
          placeholder="Search"
          className="max-w-xs"
          startContent={
            <MagnifyingGlassIcon className="h-7 w-7" />  
          }
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

        <Button name="applyButton" style={{ backgroundColor: '#07C075', color: 'white' }}>Apply</Button>

        <Button isIconOnly style={{ backgroundColor: '#07C075', color: 'white' }}>
          <PlusIcon />
        </Button>
      </div>
    </div>  

    );
}