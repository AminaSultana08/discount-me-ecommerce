import React, { useEffect, useState } from "react";
import TopResCart from "./TopResCart";
import "./TopRes.css";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const TopRestaurants = () => {
  const [topRestaurants, setTopRestaurants] = useState([]);
  useEffect(() => {
    fetch("topRestaurant.json")
      .then((res) => res.json())
      .then((data) => setTopRestaurants(data));
  }, []);

  return (
    <div className="mb-24">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="h1">
            Explore <span className="h2">Top Restaurants</span>{" "}
          </h1>
          <p className="p">Check your city Near by Restaurant</p>
        </div>
        {/**See all button to see all top restaurant, set dynamic link to see dynamic page for that. */}
        <Link className="">
          <button type="btn " className="flex  items-center">
            See All <FaAngleRight />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {topRestaurants?.slice(0, 3).map((topRestaurant) => (
          <TopResCart
            key={topRestaurant.id}
            topRestaurant={topRestaurant}
          ></TopResCart>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;
