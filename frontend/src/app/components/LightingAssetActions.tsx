import { WrenchScrewdriverIcon, FlagIcon, AdjustmentsHorizontalIcon, TrashIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { ButtonGroup, Button, Tooltip } from '@nextui-org/react'
import React from 'react'

export default function LightingAssetActions() {
  return (
    <ButtonGroup size="sm" className='grid lg:grid-cols-5 md:grid-cols-2'>
        <div className="px-1">
            <Tooltip content="Recomended Future Maintenence">
                <Button size="sm" className="px-1  bg-primary-500" isIconOnly><FlagIcon/></Button>
            </Tooltip>
        </div>
        <div className="px-1">
            <Tooltip content="Shedule Maintanence">
                <Button size="sm" className="px-1 bg-primary-500" isIconOnly><WrenchScrewdriverIcon/></Button>
            </Tooltip>
        </div>
        <div className="px-1">
            <Tooltip content="Control Lighting Asset">
                <Button size="sm" className="px-1  bg-primary-500" isIconOnly><AdjustmentsHorizontalIcon/></Button>
            </Tooltip>
        </div>
        <div className="px-1">
            <Tooltip content="Remove Digital Twin">
                <Button size="sm" className="px-1 bg-primary-500" isIconOnly><TrashIcon/></Button>
            </Tooltip>
        </div>
        <div className="px-1">
            <Tooltip content="Settings">
                <Button size="sm" className="px-1  bg-primary-500" isIconOnly><Cog6ToothIcon/></Button>
            </Tooltip>
        </div>
    </ButtonGroup>
  )
}
