import React from "react";
import ReactDOM from "react-dom/client";

// router imports
// import { BrowserRouter } from 'react-router-dom'

// css imports
import "./index.css";

// page imports
import App from "./App.jsx";

// redux imports
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
