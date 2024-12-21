import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const User = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => setOpen((prev) => !prev);

  const handleCloseMenu = () => setOpen(false);

  return (
    <div>
      <div className="flex items-center justify-center  ">
        <div className="relative  text-left">
          <li
            onClick={handleToggleMenu}
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-bold text-gray-700   focus:outline-none focus:ring-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          >
            <CiUser />
          </li>

          {open && (
            <div
              className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 px-2 py-2"
              onMouseLeave={handleCloseMenu}
            >
              <Link
                to="/signin"
                className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-50 rounded-md"
              >
                Sign In
              </Link>

              <Link
                to="/report"
                className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-50 rounded-md"
              >
                Report
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
