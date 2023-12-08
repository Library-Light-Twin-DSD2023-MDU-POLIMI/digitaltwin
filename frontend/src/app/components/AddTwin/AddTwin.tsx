'use client'

import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Input,
  Button,
  Textarea,
} from '@nextui-org/react'
import { Select, SelectItem } from '@nextui-org/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import '../globals.css'

export default function AddTwin() {
  /* TODO: Add a global state to handle visibility, not in both home and here. */
  const [isCardVisible, setIsCardVisible] = useState(true)
  const hideCard = () => setIsCardVisible(false)

  if (!isCardVisible) return null

  return (
    <Card
      className="max-w-[700px]"
      style={{ height: 'auto', minHeight: '500px', backgroundColor: '#d1d5db' }}
    >
      <CardHeader className="flex justify-between items-center">
        <p className="text-md text-2xl">Add a new digital twin</p>
        <Button isIconOnly onPress={hideCard}>
          <XMarkIcon />
        </Button>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col justify-between h-full">
        <div
          className="flex w-full flex-wrap md:flex-nowrap gap-4"
          style={{ marginTop: '50px' }}
        >
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
            label="Area"
            placeholder="Select an Area"
            className="max-w-xs"
          >
            <SelectItem key={''}>Basement</SelectItem>
            <SelectItem key={''}>Main</SelectItem>
            <SelectItem key={''}>Childrens</SelectItem>
          </Select>

          <Select
            isRequired
            labelPlacement="outside"
            label="Section"
            placeholder="Select a section"
            className="max-w-xs"
          >
            <SelectItem key={''}>Section 1</SelectItem>
            <SelectItem key={''}>Section 2</SelectItem>
            <SelectItem key={''}>Section 3</SelectItem>
          </Select>

          <Select
            isRequired
            labelPlacement="outside"
            label="Floor"
            placeholder="Select a floor"
            className="max-w-xs"
          >
            <SelectItem key={''}>Floor 0</SelectItem>

            <SelectItem key={''}>Floor 1</SelectItem>

            <SelectItem key={''}>Floor 2</SelectItem>

            <SelectItem key={''}>Floor 3</SelectItem>
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
        <Button
          size="md"
          style={{ backgroundColor: '#082f49', color: 'white' }}
        >
          Save
        </Button>
      </CardBody>
    </Card>
  )
}
