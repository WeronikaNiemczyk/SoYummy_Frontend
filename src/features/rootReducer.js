// src/features/rootReducer.js

import { combineReducers } from "@reduxjs/toolkit";

// Example reducer
const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
