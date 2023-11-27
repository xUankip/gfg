import React from "react";
import shoes from "../data/shoes";
import Nike from "./Nike";
const NikeShoe = () => {
    return (
        <div className="pricing-page">
            <h2>
                Black Friday Sale
            </h2>
            <div className="product-list">
            {shoes.map((shoe,index)=>(
                    <Nike key={index} {...shoe} />
            ))}
            </div>
        </div>
    
    )
}
export default NikeShoe;