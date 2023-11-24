import React from "react";
const PlanCard = ({ planName, description, features, price}) => {
    return (
        <div className="card h-100 shadow-lg">
            <div className="card-body">
                <div className="text-center p-3">
                    <h5 className="card-title">{planName}</h5>
                    <spam className="h2">${price}</spam>/month
                    <br /><br />
                    <ul className="list-group custom-list">
                        {features.map((feature, index) => (
                            <li
                            key={index}
                            className={`list-group-item custom-list-item ${feature.disabled ? 'disabled' : ''}`}
                            >
                                <span className={ `feature-icon ${feature.disabled ? 'disabled' : ''}`}>
                                    {feature.disabled ? 'x' : 'v'}
                                </span>
                                {feature.text}
                            </li>
                        ))}
                    </ul>
                    <small>{description}</small>
                    <br /><br />
                </div>
                <p className="card-text">SOme quick example text to build on the card title and make ip the bulk of the card's content</p>
            </div>
            <div className="card-body text-center">
                <button className="btn btn-outline-primary btn-lg" style={{ borderRadius: '30px'}}> Select</button>
            </div>
        </div>
    );
};
export default PlanCard;