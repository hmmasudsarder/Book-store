import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
// { children }: { children: React.ReactNode })
function App( ){
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default App;
