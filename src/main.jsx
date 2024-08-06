// src/main.jsx

// import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import { persistor, store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <BrowserRouter basename="/SoYummy_FrontEnd_groupNo_1"> */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter basename="/SoYummy_FrontEnd_groupNo_1">
//         <PersistGate loading={null} persistor={persistor}>
//           <App />
//         </PersistGate>
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );
