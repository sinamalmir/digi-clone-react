import React from "react";

// css
import 'bootstrap/dist/css/bootstrap.min.css';


import "./App.css"

// components
import Header from "./components/Header";
import Store from "./components/Store";

// context
import ProductContextProvider from "./context/ProductContextProvider";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ProductContextProvider>
          <Header />
          <HomePage />
          <Store />
    </ProductContextProvider>
  );
}

export default App;



