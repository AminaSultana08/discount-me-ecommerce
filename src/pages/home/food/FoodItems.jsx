import { useEffect, useState } from "react";
import FoodCart from "./FoodCart";
import "./FoodStyle.css";

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    fetch("FoodData.json")
      .then((res) => res.json())
      .then((data) => setFoodItems(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {foodItems.map((item) => (
          <FoodCart key={item.id} item={item}></FoodCart>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
