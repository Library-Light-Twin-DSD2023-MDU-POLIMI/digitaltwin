import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { Button, Card, CardBody, Chip, Tooltip } from '@nextui-org/react'
import React from 'react'

//TODO: add props, make responsive, add prediction model

export default function StatusSummary() {
  return (
    <div className="flex flex-row gap-2">
      <Chip color="success" className="w-auto bg-cyan-950" variant="dot">
        Current Status
      </Chip>
      <a href="vg.no" target="_blank">
        {' '}
        {/* TODO: add correct link */}
        <Tooltip
          showArrow
          placement="top"
          content="View predictions"
          color="default"
        >
          <Chip color="warning" className="bg-cyan-950" variant="dot">
            Predicted Status in 1 week
          </Chip>
        </Tooltip>
      </a>
    </div>
  )
}
