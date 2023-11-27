import React from "react";
import { FaStar } from "react-icons/fa";

const Nike = ({id, name, discount, price, rating, feature, sale,img})=>{
    const stars = Array.from({length : 5}, (_,index) =>(
    <FaStar key={index} color={rating > index ? '#fc0303' : '#d4cfcf'}/>
    ));

    const salePrice = price -(price / discount)*100 ;
    return (
        <div className="product">
            {sale && <div className="sale-label">Sale</div>}
            <img src={img} alt={name} />
            <h3> {name}</h3>
            <div className="price-container">
                {discount > 0 && (
                    <p className="discounted-price">₫{price.toFixed(2)}</p>
                )}
                    <p className="original-price">₫{salePrice.toFixed(2)}</p>
            </div>
            <div>
                {feature}
            </div>
            <div className="rating-svg">
                    {stars}
            </div>
            {sale}
        </div>
    )
}
export default Nike;