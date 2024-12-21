import React from "react";
import signin from "../../assets/signin.jpg";
import { BsEye } from "react-icons/bs";

const Register = () => {
  return (
    <div>
      <div>
        <img src={signin} alt="signin" className="w-full h-auto mb-3" />
      </div>
      <div>
        <form
          action=""
          className="form w-1/2 justify-center mx-auto"
          method="post"
        >
          <h1 className="text-5xl text-center font-Figtree font-semibold mb-3">
            Create Account
          </h1>

          <div className=" grid-cols-1 grid gap-3 mx-auto  ">
            <input
              type="email"
              placeholder="Email"
              name="Email"
              className=" border-black border p-2 rounded-lg "
              required
            />

            <div className="flex items-center">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className=" border-black border py-2 pl-2 pr-0 flex-1 rounded-lg "
                required
              />
              <BsEye className="-ml-8  " />
            </div>
            <div className="flex items-center">
              <input
                type="confirm password"
                placeholder="Confirm Password"
                name="password"
                className=" border-black border py-2 pl-2 pr-0 flex-1 rounded-lg "
                required
              />
              <BsEye className="-ml-8  " />
            </div>

            <label>
              <input type="checkbox" checked="" name="remember" /> Accept all
              terms & Conditions
            </label>

            <button type="submit" className="btn ">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
