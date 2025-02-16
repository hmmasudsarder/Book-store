import { Outlet } from "react-router-dom"
import Navbar from "../../components/Header/Navbar"
import Footer from "../../components/Footer/Footer"
import CopyrightFooter from "../../components/Footer/CopyrightFooter"


const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <CopyrightFooter />
    </div>
  )
}

export default Main
