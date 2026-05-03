import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../component/navbar/Navbar";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Layout;
