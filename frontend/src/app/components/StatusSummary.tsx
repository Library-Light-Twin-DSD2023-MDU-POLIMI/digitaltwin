import { Chip, Tooltip } from '@nextui-org/react'

//TODO: add props, make responsive, add prediction model

export default function StatusSummary() {
  return (
    <div className="flex flex-row gap-2">
      <Chip color="success" className="w-auto bg-primary" variant="dot">
        Current Status
      </Chip>
      <a href="vg.no" target="_blank">
        {' '}
        {/* TODO: add correct link */}
        <Tooltip
          showArrow
          placement="top"
          content="View predictions"
          color="secondary"
        >
          <Chip color="warning" className="bg-primary" variant="dot">
            Predicted Status in 1 week
          </Chip>
        </Tooltip>
      </a>
    </div>
  )
}
