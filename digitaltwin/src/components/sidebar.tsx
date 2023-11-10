"use client"
import { HomeIcon, LightBulbIcon,ChartPieIcon,BellAlertIcon, AdjustmentsHorizontalIcon, Cog6ToothIcon  } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useSelectedLayoutSegment } from "next/navigation";
import "../app/globals.css";


function classNames(...classes:string[]){
  return classes.filter(Boolean).join('')
}

const Sidebar = () => {

  const sidebarOptions = [
    {name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true},
    {name: "Asset Manager", href: "/asset-manager", icon: LightBulbIcon, current: false},
    {name: "Analytic Reports", href: "/analytics", icon: ChartPieIcon, current: false},
    {name: "Preset Configuration", href: "/preset-configuration", icon: Cog6ToothIcon, current: false},
    {name: "Notifications", href: "/notifications", icon: BellAlertIcon, current: false},
    {name: "Settings", href: "/settings", icon: AdjustmentsHorizontalIcon, current: false}
  ]

  return (
    <div className='p=3'>
      <div className='hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col'>
        <div className='flex grow flex-col gapy-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2'>
          <div className='flex h-16 shrink-0 items-center'>
            <h1 className='font-mono font-bold'>Logos</h1>
          </div>
          <nav className='flex flex-1 flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul role='list' className='-mx-2  space-y-1'>
                  {sidebarOptions.map((option)=> (
                    <li key={option.name}>
                        <Link href={option.href} className={classNames(option.current ? "bg-gray-70 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold" )}>
                          <option.icon className='text-gray-300 group-hover:text-white h-6 w-6 shrink-0'/>
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

export default Sidebar
 
