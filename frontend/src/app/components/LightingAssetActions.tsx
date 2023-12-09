import { WrenchScrewdriverIcon, FlagIcon, AdjustmentsHorizontalIcon, TrashIcon, Cog6ToothIcon , PencilSquareIcon, LinkIcon} from '@heroicons/react/24/outline'
import { ButtonGroup, Button, Tooltip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'
import React, { useState } from 'react'
import ReportWorkorder from './ReportWorkorder';
import LinkedWorkorders from './LinkedWorkorders';
import assets from '../assets.json'

//TODO: add props to ReportWorkorder

export default function LightingAssetActions() {

    const iconClasses = "text-xs text-default-500 pointer-events-none flex-shrink-0";

  return (
    <ButtonGroup size="sm" className='grid lg:grid-cols-5 md:grid-cols-2'>
        <div className="px-1">
            <Tooltip content="Recomended Future Maintenence">
                <Button size="sm" className="px-1  bg-primary-500" isIconOnly><FlagIcon/></Button>
            </Tooltip>
        </div>
        <div className="px-1">
            <ReportWorkorder/>
        </div>
        <div className="px-1">
            <LinkedWorkorders/>
        </div>
        <div className="px-1">
              <Dropdown>
                  <DropdownTrigger>
                      <Button size="sm" className="px-1  bg-primary-500" isIconOnly><Cog6ToothIcon /></Button>
                  </DropdownTrigger>
                  <DropdownMenu variant="faded">
                      <DropdownItem
                          key="edit"
                          //startContent={<PencilSquareIcon className={iconClasses} />} The startContent is not working as expected so, commenting it for now
                      > Edit digital twin
                      </DropdownItem>
                      <DropdownItem
                          key="control"
                          //startContent={<AdjustmentsHorizontalIcon className={iconClasses} />}
                      > Remotely control
                      </DropdownItem>
                      <DropdownItem
                          key="delete"
                          //startContent={<TrashIcon className={iconClasses} />}
                      > Delete digital twin
                      </DropdownItem>
                  </DropdownMenu>
              </Dropdown>
        </div>
    </ButtonGroup>
  )
}
