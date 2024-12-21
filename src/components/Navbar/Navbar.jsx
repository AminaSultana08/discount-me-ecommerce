import { useState, useRef } from "react";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import logo from "../../assets/logo (2).png";
//import Searchbar from "../../utils/searchbar/Searchbar";
import { Link } from "react-router-dom";
import User from "../User/User";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const tabRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (tabRef.current) {
      tabRef.current.style.maxHeight = menuOpen ? "0px" : "500px"; // Adjust `500px` as per content height
    }
  };

  return (
    <nav className=" top-0  flex flex-wrap items-center justify-between w-full px-4 py-5 tracking-wide bg-white shadow-md bg-opacity-90 md:py-4 md:px-8 lg:px-14">
      {/* Left nav */}
      <div className="flex items-center">
        <a href="/" className="text-3xl tracking-wide">
          <img src={logo} alt="" />
        </a>
      </div>

      <div className="block text-gray-600 cursor-pointer lg:hidden">
        {/* Toggle Button */}
        <button onClick={toggleMenu} className="w-6 h-6 text-lg">
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-500"
            >
              <rect
                width="48"
                height="48"
                fill="white"
                fillOpacity="0.01"
              ></rect>
              <path
                d="M7.94977 11.9498H39.9498"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7.94977 23.9498H39.9498"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M7.94977 35.9498H39.9498"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Collapsible Menu */}
      <div
        ref={tabRef}
        className={`relative w-full overflow-hidden transition-all duration-700 lg:hidden max-h-0`}
      >
        <div className="flex flex-col my-3 space-y-2 text-lg text-gray-600">
          <div
            className="relative inline-block"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/allCategories" className="">
              {" "}
              <button className="flex items-center p-2 rounded-md">
                <span className="">All Category</span>
                <span
                  className={`transition-transform duration-500 transform ${
                    dropdownOpen ? "-rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
            </Link>
            {dropdownOpen && (
              <div className="absolute right-0 py-1 text-gray-500 bg-white rounded-lg shadow-xl min-w-max">
                <a
                  href="#"
                  className="block px-4 py-1 hover:text-gray-900 hover:bg-gray-100"
                >
                  Lorem, ipsum.
                </a>
                <a
                  href="#"
                  className="block px-4 py-1 hover:text-gray-900 hover:bg-gray-100"
                >
                  Lorem, ipsum dolor.
                </a>
                <a
                  href="#"
                  className="block px-4 py-1 hover:text-gray-900 hover:bg-gray-100"
                >
                  Lorem ipsum dolor sit amet.
                </a>
              </div>
            )}
          </div>
          <a href="/coupon" className="hover:text-gray-900">
            Coupon
          </a>
          <hr />
          <a href="/support" className="hover:text-gray-900">
            Support
          </a>
          <hr />
        </div>
        <div className="py-6 px-5 space-y-6">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <a
              href="/about"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              Contact
            </a>
          </div>
        </div>
        <div>
          <a
            href="#"
            className="w-full flex items-center justify-center text-white px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium bg-gray-600 hover:bg-gray-700"
          >
            <IoCartOutline />
          </a>
          <p className="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?{" "}
            <Link to="#" className="text-gray-600 hover:text-gray-900">
              <button type="btn" className="">
                <CiUser />
              </button>
            </Link>
          </p>
        </div>
      </div>

      {/* Full Menu for Larger Screens */}
      <div className="hidden w-full lg:flex lg:items-center lg:w-auto">
        <div className="flex-1 pt-6 justify-center text-lg text-gray-500 lg:pt-0 lg:flex">
          <div
            className="relative inline-block"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/allCategories">
              {" "}
              <button className="flex items-center p-2 rounded-md">
                <span className="mr-4">All Category</span>
                <span
                  className={`transition-transform duration-500 transform ${
                    dropdownOpen ? "-rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
            </Link>
            {dropdownOpen && (
              <div className="absolute right-0 py-1 text-gray-500 bg-white rounded-lg shadow-xl min-w-max">
                <a
                  href="#"
                  className="block px-4 py-1 hover:text-gray-900 hover:bg-gray-100"
                >
                  Lorem, ipsum.
                </a>
                <a
                  href="#"
                  className="block px-4 py-1 hover:text-gray-900 hover:bg-gray-100"
                >
                  Lorem, ipsum dolor.
                </a>
                <a
                  href="#"
                  className="block px-4 py-1 hover:text-gray-900 hover:bg-gray-100"
                >
                  Lorem ipsum dolor sit amet.
                </a>
              </div>
            )}
          </div>
          <a
            href="/coupon"
            className="inline-block px-4 py-2 hover:text-gray-900 text-gray-600"
          >
            Coupon
          </a>
          <a
            href="/support"
            className="inline-block px-4 py-2 hover:text-gray-900 text-gray-600"
          >
            Support
          </a>

          {/* Dropdown */}
        </div>
        <div className="flex items-center">
          <a
            href="#"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            <IoCartOutline />
          </a>
          <Link href="#" className="">
            <User />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
