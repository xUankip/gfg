import React from "react";
import products from "../data/products";
import Product from "./Product";

const ProductList = ()=>{
    return (
        <div className="pricing-page">
            <h2>Our Product</h2>
            <div className="product-list">
                {products.map((product,index)=>(
                    <Product key={index} {...product} />
                ))}
            </div>
        </div>
    )
}
export default ProductList;