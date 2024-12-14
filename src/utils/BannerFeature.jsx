import React from "react";
import f1 from "../assets/features/f1.png";
import f2 from "../assets/features/f2.png";
import f3 from "../assets/features/f3.png";
import f4 from "../assets/features/f4.png";
const BannerFeature = () => {
  const features = [
    {
      id: 1,
      image: f1,
      heading: "Discount",
      paragraph: "Every week new sales",
    },
    {
      id: 2,
      image: f2,
      heading: "Free Delivery",
      paragraph: "100% Free for all orders",
    },
    {
      id: 3,
      image: f3,
      heading: "Great Support 24/7",
      paragraph: "We care your experiences",
    },
    {
      id: 4,
      image: f4,
      heading: "secure Payment",
      paragraph: "100% Secure Payment Method",
    },
  ];
  return (
    <div className="mx-24">
      <div className="container  bg-white  shadow-lg  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white  flex items-center justify-center rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={feature.image}
              alt={feature.heading}
              className="w-[43.707px] h-[43.707px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-[15.734px] font-semibold text-gray-800">
                {feature.heading}
              </h2>
              <p className="text-gray-600 mt-2">{feature.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerFeature;
