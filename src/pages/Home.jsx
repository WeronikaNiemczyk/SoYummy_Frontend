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
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <p>Welcome to the home page.</p>
      <Outlet />
    </div>
  );
};

export default Home;
