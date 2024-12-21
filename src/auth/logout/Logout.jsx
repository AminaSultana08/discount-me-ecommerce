import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

const Logout = () => {
  return (
    <div>
      <h1 className="flex justify-center items-center">
        {" "}
        <IoLogOutOutline /> <span>Logout</span>{" "}
      </h1>
    </div>
  );
};

export default Logout;
