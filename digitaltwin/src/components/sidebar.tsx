"use client"
import { HomeIcon, LightBulbIcon,ChartPieIcon,BellAlertIcon, AdjustmentsHorizontalIcon, Cog6ToothIcon  } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import "../app/globals.css";

function classNames(...classes:string[]){
  return classes.filter(Boolean).join('')
}

function getRoutingPath() {
  const pathname = usePathname()
  return pathname
}

const Sidebar = () => {
  const path = getRoutingPath()
  const sidebarOptions = [
    {name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: path==="/dashboard" ? true: false},
    {name: "Asset Manager", href: "/asset-manager", icon: LightBulbIcon, current: path==="/asset-manager" ? true: false },
    {name: "Analytic Reports", href: "/analytics", icon: ChartPieIcon, current: path==="/analytics" ? true: false },
    {name: "Preset Configuration", href: "/preset-configuration", icon: Cog6ToothIcon, current: path==="/preset-configuration" ? true: false},
    {name: "Notifications", href: "/notifications", icon: BellAlertIcon, current: path==="/notifications" ? true: false},
    {name: "Settings", href: "/settings", icon: AdjustmentsHorizontalIcon, current: path==="/settings" ? true: false}
  ]

  return (
    <div className=''>
      <div className='w-60 h-full'>
        <div className='flex grow flex-col h-full gapy-y-5 overflow-y-auto bg-cyan-950 bg-blend-darken px-4 pb-4 border-r-2'>
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
                          <option.icon className=' group-hover:text-white h-6 w-6 shrink-0'/>
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
 
