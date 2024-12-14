import React from "react";
import banner from "../../../assets/banner1.png";
import mint from "../../../assets/mint.png";
import orange from "../../../assets/orange.png";
import banner2 from "../../../assets/banner.png";
import BannerFeature from "../../../utils/bannerFeature";
const Banner = () => {
  return (
    <div className="mx-auto  justify-center items-center py-5 ">
      <div className="flex justify-center items-center gap-[100px] ">
        <img src={banner} alt="" className="-mb-28 mt-10 w-[520px] h-[270px]" />
        <img
          src={mint}
          alt=""
          className="-mt-20 w-[186.525px] h-[177.723px] rotate-[-90.545deg] stroke-secondary-3 stroke-[2px] opacity-10"
        />
      </div>
      <div className="">
        <img
          src={orange}
          alt=""
          className="mx-auto -mb-20   w-[118.679px] h-[74px] flex-shrink-0 stroke-secondary-3 stroke-[2px] opacity-10 flex items-center justify-center" 
        />
      </div>
      <div className="flex flex-1 justify-between items-center -mt-20">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            Good{" "}
            <span className="text-orange-500 text-4xl font-bold">food</span> ,
            great <br /> memories
          </h1>
          <p>
            Enable diners to customize their booking by <br/> requesting a specific
            table location or view.
          </p>
          <div className="w-full max-w-2xl mx-auto">
            <div className="flex items-center rounded-full bg-emerald-500 px-2 py-1">
              {/* Location Dropdown Button */}
              <button
                type="button"
                className="text-white hover:bg-emerald-600 hover:text-white flex items-center gap-1 px-3 py-2 rounded-full"
              >
                Location
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14a.75.75 0 01-.53-.22l-3.75-3.75a.75.75 0 111.06-1.06L10 12.44l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-.53.22z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Divider */}
              <div className="h-6 w-px  mx-2" />

              {/* Search Input */}
              <div className="flex-1 flex items-center">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full border-0 bg-transparent text-white placeholder:text-emerald-100 focus:outline-none"
                />
              </div>

              {/* Search Button */}
              <button
                type="button"
                className="text-white hover:bg-emerald-600 hover:text-white p-2 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 4a7 7 0 100 14 7 7 0 000-14zm10 10l-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
          <input type="" name="" value="" />
        </div>
        <img src={banner2} alt="" className="-mt-20 h-[490px] w-[490px]" />
      </div>

      <BannerFeature/>
    </div>
  );
};

export default Banner;
