'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import '../globals.css'


function classNames(...classes:string[]){
  return classes.filter(Boolean).join('')
}

function getRoutingPath() {
  const pathname = usePathname()
  return pathname
}

export default function Sidebar() {
  const path = getRoutingPath()
  const sidebarOptions = [
    {name: "Asset Manager", href: "/assetManager", current: path==="/assetManager" ? true: false },
    {name: "Analytic Reports", href: "/analyticsReport", current: path==="/analyticsReport" ? true: false },
    {name: "Preset Configuration", href: "/presets", current: path==="/presets" ? true: false},
    {name: "Notifications", href: "/notification", current: path==="/notification" ? true: false},
    {name: "Settings", href: "/settings", current: path==="/settings" ? true: false}
  ]

  return (
    <div id="sidebar">
      <div className='w-60 h-full'>
        <div className='flex grow flex-col h-full gapy-y-5 overflow-y-auto bg-cyan-950 bg-blend-darken px-4 pb-4 border-r-2' style={{ minHeight: '92.4vh' }}>
          <nav className='flex flex-1 flex-col'
          data-te-sidenav-init
          data-te-sidenav-hidden="false"
          data-te-sidenav-accordion="true">
            <ul role='list' className='flex flex-1 flex-col gap-y-7 py-7'>
              <li>
                <ul role='list' className='-mx-2  space-y-1'  data-te-sidenav-menu-ref>
                  {sidebarOptions.map((option)=> (
                    <li key={option.name}>
                        <Link href={option.href} className={classNames(option.current ? "bg-cyan-900 text-white  hover:text-white" : "text-gray-400 hover:text-white hover:bg-cyan-900 bg-cyan-900", "group flex gap-x-3 rounded-md p-4 text-sm leading-6 font-semibold" )}>
                          {option.name}
                        </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}


