import "./App.css";
import Header from "./components/header";
import Products from "./components/products";

import { useEffect } from "react";

import { useSelector } from "react-redux";

const App = () => {


  const { cart } = useSelector((state) => state.cartReducer);



  useEffect(() => {
    console.log('cart:',cart)
  },[cart])

  return (
    <div>
      <Header />
      <Products />
    </div>
  );
};

export default App;
