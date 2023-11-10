import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

const layout = (props: Props) => {
  return (
    <div className="">
      <div>
        <Sidebar />
      </div>
      <main className="">
        {props.children}
      </main>
    </div>
  )
}

export default layout