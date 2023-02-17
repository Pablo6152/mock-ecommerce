import React from "react";

export default function Card(props){
    return (
        <div className="item-container">
            <div className="img-container">
                <img className="img-item" src={props.image} alt="" />
                <p className="category-item">{props.category}</p>
            </div>
            <div className="data-container">
                <p className="item-title">{props.title}</p>
                <div className="rating-container">
                    <span className="material-icons star-icon">star_rate</span>
                    <p className="rate-item">{props.rate}</p>
                    <p className="count"> - {props.count}</p>
                </div>
                <p className="description-item">{props.description}</p>
                <p className="price">From {props.price}</p>
            </div>
        </div>
    )
}



// id={x.id}
// title={x.title}
// price={x.price}
// description={x.description}
// category={x.category}
// image={x.image}
// rate={x.rating.rate}
// count={x.rating.count}