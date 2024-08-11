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
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ChooseYourBreakfast } from "../components/MainPage/ChooseYourBreakfast";
import { Main } from "../components/MainPage/Main";
import { PreviewCategories } from "../components/MainPage/PreviewCategories";
import { Search } from "../components/MainPage/Search";
import "../styles/MainPage.css";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

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

export default Home;
