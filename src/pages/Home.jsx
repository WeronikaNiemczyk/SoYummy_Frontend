// src/pages/Home.jsx

// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <p>Welcome to the home page.</p>
//     </div>
//   );
// };

// import React from 'react';
/* // last
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page.</p>
      <Outlet />
    </div>
  );
};

export default Home;
*/
import { Outlet } from "react-router-dom";
import { Main } from "../components/MainPage/Main";
import { ChooseYourBreakfast } from "../components/MainPage/ChooseYourBreakfast";
import { Search } from "../components/MainPage/Search";
import { PreviewCategories } from "../components/MainPage/PreviewCategories";
import "../styles/MainPage.css";

export const Home = () => {
  return (
    <div>
      <div className="MainContainer">
        <div className="MainContainerInside">
          <Main />
          <ChooseYourBreakfast />
          <Search />
        </div>
        <PreviewCategories />
      </div>
      <Outlet />
    </div>
  );
};
