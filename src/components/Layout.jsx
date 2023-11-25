import Footer from "./Footer";
import Navigation from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
