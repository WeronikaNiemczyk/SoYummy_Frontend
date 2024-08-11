import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
//import { Footer } from './Footer/Footer'

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <Outlet />
      </main>
      {/* <Footer />*/}
    </div>
  );
};

export default SharedLayout;
