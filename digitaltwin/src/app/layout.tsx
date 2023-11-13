import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";
import Header from "@/components/header";

type Props = {
  children: ReactNode
}

const layout = (props: Props) => {
  return (
<div>
<div id="header"><Header /></div>
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