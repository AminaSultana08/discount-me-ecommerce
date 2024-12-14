import React from "react";

const FoodCart = ({ item }) => {
  const { image, name, price } = item;
  return (
    <div>
      <img src={image} alt="" className="img" />
      <h1 className="h1">{name} </h1>
      <p className="p">${price} </p>
    </div>
  );
};

export default FoodCart;
