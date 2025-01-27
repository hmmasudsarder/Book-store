import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import CopyrightFooter from "./components/Footer/CopyrightFooter";
// { children }: { children: React.ReactNode })
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <CopyrightFooter />
    </>
  );
}

export default App;
