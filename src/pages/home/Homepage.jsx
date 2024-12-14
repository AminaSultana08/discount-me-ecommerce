import Banner from "./Banner/Banner";
import FoodItems from "./food/FoodItems";
import TopRestaurants from "./TopRestaurants/TopRestaurants";

const HomePage = () => {
  return (
    <div className="bg-[#FDFDFD]">
      <Banner />
      <TopRestaurants />
      <FoodItems />
    </div>
  );
};

export default HomePage;
