import React from 'react';
import IngredientsShoppingList from '../components/ShoppingList/IngredientsShoppingList'; 
import ManageShoppingList from '../components/ShoppingList/ManageShoppingList';

const ShoppingListPage = () => {
  return (
    <div>
      <h1>Shopping List</h1>
      <IngredientsShoppingList />
      <ManageShoppingList />
    </div>
  );
};

export default ShoppingListPage;
