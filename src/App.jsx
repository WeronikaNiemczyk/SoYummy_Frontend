import WelcomePage from "./pages/WelcomePage";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import AddRecipes from "./pages/AddRecipes";
import Categories from "./pages/Categories";
import MyRecipes from "./pages/MyRecipes";
import RecipePage from "./pages/RecipePage";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ShoppingList from "./pages/ShoppingListPage";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CheckRoute from "./features/routes";
import { ShoppingListProvider } from "./components/ShoppingList/SchoppingListContext";
const App = () => {
  return (
    <Routes>
    <Route 
        path="/SoYummy_FrontEnd_groupNo_1/" 
        element={<CheckRoute redirectTo="/SoYummy_FrontEnd_groupNo_1/welcome" element={<SharedLayout />} />}>
        <Route path="home" element={<CheckRoute redirectTo="/SoYummy_FrontEnd_groupNo_1/welcome" element={<Home />} />} />
        <Route path="categories/:category" element={<CheckRoute redirectTo="/SoYummy_FrontEnd_groupNo_1/welcome" element={<Categories />} />} />
        <Route path="recipe/:recipeID" element={<CheckRoute redirectTo="/SoYummy_FrontEnd_groupNo_1/welcome" element={<RecipePage />} />} />
        <Route path="add" element={<CheckRoute redirectTo="/SoYummy_FrontEnd_groupNo_1/welcome" element={<AddRecipes />} />} />
        <Route path="my" element={<CheckRoute redirectTo="/SoYummy_FrontEnd_groupNo_1/welcome" element={<MyRecipes />} />} />
        <Route path="favorite" element={<CheckRoute redirectTo="/SoYummy_FrontEnd_groupNo_1/welcome" element={<Favorites />} />} />
        <Route path="shopping-list" element={<CheckRoute redirectTo="/SoYummy_FrontEnd_groupNo_1/welcome" element={<ShoppingList />} />} />
        <Route path="search" element={<CheckRoute redirectTo="/SoYummy_FrontEnd_groupNo_1/welcome" element={<Search />} />} />
    </Route>
    <Route path="/SoYummy_FrontEnd_groupNo_1/welcome" element={<WelcomePage />} />
    <Route path="/SoYummy_FrontEnd_groupNo_1/register" element={<Register />} />
    <Route path="/SoYummy_FrontEnd_groupNo_1/signin" element={<Login/>} />
</Routes>
  );
};

export default App;
