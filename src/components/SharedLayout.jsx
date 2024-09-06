import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import { Header } from "./Header/Header";

const SharedLayout = () => {
  const location = useLocation();

  const noFooterPaths = [
    "/SoYummy_Frontend/",
    "/SoYummy_Frontend/welcome",
    "/SoYummy_Frontend/register",
    "/SoYummy_Frontend/signin",
  ];

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default SharedLayout;
