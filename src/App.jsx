import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import { ShoppingListProvider } from "./components/ShoppingList/SchoppingListContext";
import CheckRoute from "./features/routes";
import AddRecipes from "./pages/AddRecipes";
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyRecipes from "./pages/MyRecipes";
import RecipePage from "./pages/RecipePage";
import Register from "./pages/Register";
import Search from "./pages/Search";
import ShoppingList from "./pages/ShoppingListPage";
import WelcomePage from "./pages/WelcomePage";
const App = () => {
  return (
    <ShoppingListProvider>
      <Routes>
        <Route
          path="/"
          element={
            <CheckRoute redirectTo="/welcome" element={<SharedLayout />} />
          }
        >
          <Route
            path="/home"
            element={<CheckRoute redirectTo="/welcome" element={<Home />} />}
          />
          <Route
            path="/categories/:category"
            element={
              <CheckRoute redirectTo="/welcome" element={<Categories />} />
            }
          />
          <Route
            path="/recipe/:recipeID"
            element={
              <CheckRoute redirectTo="/welcome" element={<RecipePage />} />
            }
          />
          <Route
            path="/add"
            element={
              <CheckRoute redirectTo="/welcome" element={<AddRecipes />} />
            }
          />
          <Route
            path="/my"
            element={
              <CheckRoute redirectTo="/welcome" element={<MyRecipes />} />
            }
          />
          <Route
            path="/favorite"
            element={
              <CheckRoute redirectTo="/welcome" element={<Favorites />} />
            }
          />
          <Route
            path="/shopping-list"
            element={
              <CheckRoute redirectTo="/welcome" element={<ShoppingList />} />
            }
          />
          <Route
            path="/search"
            element={<CheckRoute redirectTo="/welcome" element={<Search />} />}
          />
        </Route>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </ShoppingListProvider>
  );
};

export default App;
