import { ReactNode } from "react";
import SideNav from "../_components/SideNav";


const Layout: React.FC<{children : ReactNode}> = ({children}) => {
  
  
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12 " >
      <SideNav/>
      <div className="py-1" >{children}</div>
    </div>
  )
  
}



export default Layout;