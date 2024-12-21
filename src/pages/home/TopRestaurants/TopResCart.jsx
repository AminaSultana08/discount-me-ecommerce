import React from "react";
import "./TopRes.css";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
const TopResCart = ({ topRestaurant }) => {
  const { image, name, location, details } = topRestaurant;
  return (
    <div>
      <div className="box font-IbmPlexSans  ">
        <img src={image} alt="" className="img" />

        <div className="flex justify-between">
          <h1 className="cart-h1">{name} </h1>

          <p className="flex gap-2 justify-center items-center">
            <FaStar className="text-orange-500 text-lg " /> (4.5)
          </p>
        </div>
        <p className="flex gap-2 items-center">
          <FiMapPin className="secondary1 text-lg " /> {location}
        </p>
        <p>{details} </p>
        <button type="" className="btn mt-2 text-white">
          Visit
        </button>
      </div>
    </div>
  );
};

export default TopResCart;
