import React from "react";
import "./index.css";
import"../src/css/style.css"
import Item from "./ItemsList/Item";
import Product from "./Product/Product";
import ProductList from "./Product/ProductList";
// import Navbar from "./Navbar";
// import PricingHeader from "./PricingHeader.js";
// import Plans from "./Plans";
// import Footer from "./Footer";
// import PlanCard from "./PlanCard.js";


export default function App() {
  return (
    <div className="App" id="top">
      {/* <Product /> */}
      <ProductList />
      {/* <Navbar /> */}
      {/* <Item /> */}
      {/* <PricingHeader /> */}
        {/* <Plans /> */}
      {/* <Footer /> */}
    </div>
  );
}