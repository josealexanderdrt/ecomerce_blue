import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/ProductsProvider.jsx";
import ProductDetailProvider from "./context/ProductDetailProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
    <ProductsProvider>
    <ProductDetailProvider>
        <App />
        </ProductDetailProvider>
    </ProductsProvider>
      </BrowserRouter>
  </React.StrictMode>
);
