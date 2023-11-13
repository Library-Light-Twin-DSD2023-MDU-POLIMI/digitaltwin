
import { ReactNode } from "react";
import Header from './components/header/header';

type Props = {
  children: ReactNode
}

const layout = (props: Props) => {
  return (
<div>
<div id="header"><Header /></div>
<div id="main-wrap">
  
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