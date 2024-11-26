import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import MobileSidebar from "../components/MobileSidebar"
const DashboardLayout = () => {
  /* By applying outlet only the chang section is updated rest is stable */
  return (
    <div className="app-container">
    <div className="main-sidebar">
      <Sidebar />
    </div>
      <MobileSidebar/>
      <div className="main-content">
        <Header />
        <div className="outlet">    
         <Outlet/>
        </div>
      </div>
      </div>
  )
}

export default DashboardLayout
