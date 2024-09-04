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
            <CheckRoute
              redirectTo="/SoYummy_Frontend/welcome"
              element={<SharedLayout />}
            />
          }
        >
          <Route
            path="/SoYummy_Frontend/home"
            element={
              <CheckRoute
                redirectTo="/SoYummy_Frontend/welcome"
                element={<Home />}
              />
            }
          />
          <Route
            path="/SoYummy_Frontend/categories/:category"
            element={
              <CheckRoute
                redirectTo="/SoYummy_Frontend/welcome"
                element={<Categories />}
              />
            }
          />
          <Route
            path="/SoYummy_Frontend/recipe/:recipeID"
            element={
              <CheckRoute
                redirectTo="/SoYummy_Frontend/welcome"
                element={<RecipePage />}
              />
            }
          />
          <Route
            path="/SoYummy_Frontend/add"
            element={
              <CheckRoute
                redirectTo="/SoYummy_Frontend/welcome"
                element={<AddRecipes />}
              />
            }
          />
          <Route
            path="/SoYummy_Frontend/my"
            element={
              <CheckRoute
                redirectTo="/SoYummy_Frontend/welcome"
                element={<MyRecipes />}
              />
            }
          />
          <Route
            path="/SoYummy_Frontend/favorite"
            element={
              <CheckRoute
                redirectTo="/SoYummy_Frontend/welcome"
                element={<Favorites />}
              />
            }
          />
          <Route
            path="/SoYummy_Frontend/shopping-list"
            element={
              <CheckRoute
                redirectTo="/SoYummy_Frontend/welcome"
                element={<ShoppingList />}
              />
            }
          />
          <Route
            path="/SoYummy_Frontend/search"
            element={
              <CheckRoute
                redirectTo="/SoYummy_Frontend/welcome"
                element={<Search />}
              />
            }
          />
        </Route>
        <Route path="/SoYummy_Frontend/welcome" element={<WelcomePage />} />
        <Route path="/SoYummy_Frontend/register" element={<Register />} />
        <Route path="/SoYummy_Frontend/signin" element={<Login />} />
      </Routes>
    </ShoppingListProvider>
  );
};

export default App;
