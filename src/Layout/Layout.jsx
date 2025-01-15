import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar/>

      <div className="container-fluid p-0 position-relative ">
        <Outlet />
      </div>

      <Info/>

      <Footer />
    </div>
  );
}
