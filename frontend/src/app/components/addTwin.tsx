'use client'

import React, { useState } from "react";
import {Card, CardHeader, CardBody, Divider, Input, Button, Textarea} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function AddTwin() {
  const [isCardVisible, setIsCardVisible] = useState(true);
  const hideCard = () => setIsCardVisible(false);
  /* const saveCard = () => make an API call */

  if (!isCardVisible) return null;
  
  return (
    <Card className="max-w-[600px]" style={{ height: 'auto', minHeight: '500px' }}>
      <CardHeader className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-md text-2xl">Add new digital twin</p>
          <p className="text-large">Digital twin details</p>
        </div>
        <Button isIconOnly onPress={hideCard}>
          <XMarkIcon />
        </Button>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col justify-between h-full">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4" style={{ marginTop: '50px' }}>
          <Input
            isRequired
            labelPlacement="outside"
            type="assetID"
            placeholder="Asset Identifier"
            label="AssetID"
            className="max-w-xs"
          />
          <Select 
            isRequired
            labelPlacement="outside"
            label="Floor"
            placeholder="Select a floor" 
            className="max-w-xs" 
          >
            <SelectItem key={""}>
              Test
            </SelectItem>
          </Select>
          <Select 
            isRequired
            labelPlacement="outside"
            label="Section"
            placeholder="Select a section" 
            className="max-w-xs" 
          >
            <SelectItem key={""}>
              Test
            </SelectItem>
          </Select>
        </div>
        <div className="mt-4">
          <Textarea
            labelPlacement="outside"
            type="notes"
            placeholder="Describe the digital twin"
            label="Notes"
            className="max-w-xs"
            style={{ height: '150px', width: '100%' }} 
          />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button size="md">
            Save
          </Button>
          <Button size="md" onPress={hideCard}>
            Cancel
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
