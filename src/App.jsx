// src/App.jsx

// import { Header } from "./components/Header/Header";
// import RegisterPage from "./pages/RegisterPage";
// import SigninPage from "./pages/SigninPage";

import WelcomePage from "./pages/WelcomePage";

import { Route, Routes } from "react-router-dom";
import AddRecipes from "./pages/AddRecipes";
import Categories from "./pages/Categories";
import MyRecipes from "./pages/MyRecipes";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ShoppingList from "./pages/ShoppingList";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="SoYummy_FrontEnd_groupNo_1/" element={<WelcomePage />} />
      <Route path="SoYummy_FrontEnd_groupNo_1/home" element={<Home />} />
      <Route
        path="SoYummy_FrontEnd_groupNo_1/categories/:category"
        element={<Categories />}
      />
      <Route path="SoYummy_FrontEnd_groupNo_1/add" element={<AddRecipes />} />
      <Route path="SoYummy_FrontEnd_groupNo_1/my" element={<MyRecipes />} />
      <Route
        path="SoYummy_FrontEnd_groupNo_1/favorite"
        element={<Favorites />}
      />
      <Route
        path="SoYummy_FrontEnd_groupNo_1/shopping-list"
        element={<ShoppingList />}
      />
      <Route path="SoYummy_FrontEnd_groupNo_1/search" element={<Search />} />
      <Route
        path="SoYummy_FrontEnd_groupNo_1/register"
        element={<Register />}
      />
      <Route path="SoYummy_FrontEnd_groupNo_1/signin" element={<Login />} />
    </Routes>
  );
};

export default App;

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <WelcomePage />
//       <RegisterPage />
//       <SigninPage />
//       {/* < Inne komponenty> */}
//     </div>
//   );
// };

// export default App;

// import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import AddRecipes from "./pages/AddRecipes";
// import Categories from "./pages/Categories";
// import Favorites from "./pages/Favorites";
// import Home from "./pages/Home";
// import LandingPage from "./pages/LandingPage";
// import Login from "./pages/Login";
// import MyRecipes from "./pages/MyRecipes";
// import Register from "./pages/Register";
// import Search from "./pages/Search";
// import ShoppingList from "./pages/ShoppingList";
// import User from "./pages/User";
// import styles from "./styles/App.module.css";

// const App = () => {
//   return (
//     <Router>
//       <div className={styles.app}>
//         <nav className={styles.navbar}>
//           <Link to="/">Home</Link>
//           <Link to="/categories">Categories</Link>
//           <Link to="/add-recipes">Add recipes</Link>
//           <Link to="/my-recipes">My recipes</Link>
//           <Link to="/favorites">Favorites</Link>
//           <Link to="/shopping-list">Shopping list</Link>
//           <Link to="/search">Search</Link>
//           <Link to="/user">User</Link>
//           {/* Remove darkModeToggle if not needed */}
//         </nav>
//         <div style={{ marginTop: "100px" }}>
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/categories" element={<Categories />} />
//             <Route path="/add-recipes" element={<AddRecipes />} />
//             <Route path="/my-recipes" element={<MyRecipes />} />
//             <Route path="/favorites" element={<Favorites />} />
//             <Route path="/shopping-list" element={<ShoppingList />} />
//             <Route path="/search" element={<Search />} />
//             <Route path="/user" element={<User />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

// // src/App.jsx

// import {
//   Link,
//   Route,
//   BrowserRouter as Router,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import AddRecipes from "./pages/AddRecipes";
// import Categories from "./pages/Categories";
// import Favorites from "./pages/Favorites";
// import Home from "./pages/Home";
// import LandingPage from "./pages/LandingPage";
// import Login from "./pages/Login";
// import MyRecipes from "./pages/MyRecipes";
// import Register from "./pages/Register";
// import Search from "./pages/Search";
// import ShoppingList from "./pages/ShoppingList";
// import User from "./pages/User";
// import styles from "./styles/App.module.css";

// const App = () => {
//   const location = useLocation();
//   const showNav = location.pathname !== "/";

//   return (
//     <Router>
//       <div className={styles.app}>
//         {showNav && (
//           <nav className={styles.navbar}>
//             <Link to="/home">Home</Link>
//             <Link to="/categories">Categories</Link>
//             <Link to="/add-recipes">Add recipes</Link>
//             <Link to="/my-recipes">My recipes</Link>
//             <Link to="/favorites">Favorites</Link>
//             <Link to="/shopping-list">Shopping list</Link>
//             <Link to="/search">Search</Link>
//             <Link to="/user">User</Link>
//           </nav>
//         )}
//         <div style={{ marginTop: "100px" }}>
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/categories" element={<Categories />} />
//             <Route path="/add-recipes" element={<AddRecipes />} />
//             <Route path="/my-recipes" element={<MyRecipes />} />
//             <Route path="/favorites" element={<Favorites />} />
//             <Route path="/shopping-list" element={<ShoppingList />} />
//             <Route path="/search" element={<Search />} />
//             <Route path="/user" element={<User />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

// // src/App.jsx

// import {
//   Link,
//   Route,
//   BrowserRouter as Router,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import AddRecipes from "./pages/AddRecipes";
// import Categories from "./pages/Categories";
// import Favorites from "./pages/Favorites";
// import Home from "./pages/Home";
// import LandingPage from "./pages/LandingPage";
// import Login from "./pages/Login";
// import MyRecipes from "./pages/MyRecipes";
// import Register from "./pages/Register";
// import Search from "./pages/Search";
// import ShoppingList from "./pages/ShoppingList";
// import User from "./pages/User";
// import styles from "./styles/App.module.css";

// const AppContent = () => {
//   const location = useLocation();
//   const showNav = location.pathname !== "/";

//   return (
//     <div className={styles.app}>
//       {showNav && (
//         <nav className={styles.navbar}>
//           <Link to="/home">Home</Link>
//           <Link to="/categories">Categories</Link>
//           <Link to="/add-recipes">Add recipes</Link>
//           <Link to="/my-recipes">My recipes</Link>
//           <Link to="/favorites">Favorites</Link>
//           <Link to="/shopping-list">Shopping list</Link>
//           <Link to="/search">Search</Link>
//           <Link to="/user">User</Link>
//         </nav>
//       )}
//       <div style={{ marginTop: "100px" }}>
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/categories" element={<Categories />} />
//           <Route path="/add-recipes" element={<AddRecipes />} />
//           <Route path="/my-recipes" element={<MyRecipes />} />
//           <Route path="/favorites" element={<Favorites />} />
//           <Route path="/shopping-list" element={<ShoppingList />} />
//           <Route path="/search" element={<Search />} />
//           <Route path="/user" element={<User />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// };

// export default App;
