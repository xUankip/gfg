import React from "react";
import {FaStar} from 'react-icons/fa'

const Product = ({name, price, discount, pic, rating, sale})=>{

    const stars = Array.from({length:5}, (_, index)=>(
        <FaStar key={index} color={rating > index ? '#ffc107' : '#e4e5e9'}/>
    ));

const discountedPrice = price - discount;

return (
    <div className="product">
        {sale && <div className="sale-label">Sale</div>}
        <img src={pic} alt={name} />
        <h3>{name}</h3>
        <div className="price-container">
            {discount >0 && (
            <p className="discounted-price">${price.toFixed(2)}</p>
            )}
            <p className="original-price">${discountedPrice.toFixed(2)}</p>
        </div>
        <div className="rating-svg">{stars}</div>
        {sale ? (
        <button className="add-to-card">Add to Card</button>
        ) : (
        <button className="view-options">View Options</button>
        )}
    </div>
    );
};
export default Product;