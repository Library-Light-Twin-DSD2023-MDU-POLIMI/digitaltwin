'use client'

import {
  AdjustmentsHorizontalIcon,
  BellAlertIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  LightBulbIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../globals.css'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join('')
}

function getRoutingPath() {
  const pathname = usePathname()
  return pathname
}

export default function Sidebar() {
  const path = getRoutingPath()
  const sidebarOptions = [
    {
      name: 'Dashboard',
      href: '/',
      icon: LightBulbIcon,
      current: path === '/' ? true : false,
    },
    {
      name: 'Analytic Reports',
      href: '/analyticsReport',
      icon: ChartPieIcon,
      current: path === '/analyticsReport' ? true : false,
    },
    {
      name: 'Preset Configuration',
      href: '/presets',
      icon: AdjustmentsHorizontalIcon,
      current: path === '/presets' ? true : false,
    },
    {
      name: 'Notifications',
      href: '/notification',
      icon: BellAlertIcon,
      Cocurrent: path === '/notification' ? true : false,
    },
    {
      name: 'Settings',
      href: '/settings',
      icon: Cog6ToothIcon,
      current: path === '/settings' ? true : false,
    },
  ]

  return (
    <div id="sidebar">
      <div className="w-60 h-full min-h-full drop-shadow-lg">
        <div
          className="flex grow flex-col h-full gapy-y-5 overflow-y-auto bg-primary px-4 pb-4"
          style={{ minHeight: '100vh' }}
        >
          <nav
            className="flex flex-1 flex-col"
            data-te-sidenav-init
            data-te-sidenav-hidden="false"
            data-te-sidenav-accordion="true"
          >
            <ul role="list" className="flex flex-1 flex-col gap-y-7 py-7">
              <li>
                <ul
                  role="list"
                  className="-mx-2  space-y-1"
                  data-te-sidenav-menu-ref
                >
                  {sidebarOptions.map(option => (
                    <li key={option.name}>
                      <Link
                        href={option.href}
                        className={classNames(
                          option.current
                            ? 'text-primary bg-primary-700 hover:text-background'
                            : 'hover:bg-primary-700 hover:text-primary bg-primary-800',
                          'group flex gap-x-3 rounded-md p-4 text-sm leading-6 font-semibold'
                        )}
                      >
                        <option.icon className=" group-hover:text-white h-6 w-6 shrink-0" />
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
