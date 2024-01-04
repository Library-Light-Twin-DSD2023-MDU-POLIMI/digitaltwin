'use client'

import React from 'react'
import { Card } from '@nextui-org/react'
import WorkorderTable from '../components/WorkorderTable'

export default function Workorders() {
  return (
    <div className="flex w-full flex-col bg-primary-200 px-4 py-4">
      <Card className="bg-primary-50">
        <div className="py-4 px-4 ">
          <WorkorderTable />
        </div>
      </Card>
    </div>
  )
}
