import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

const layout = (props: Props) => {
  return (
<div>
<div id="header">Header Code goes here</div>
<div id="main-wrap">
  <div id="sidebar"><Sidebar /></div>
  <div id="content-wrap">
  <main className="">
        {props.children}
      </main>
  </div>
</div>
</div>
  )
}

export default layout