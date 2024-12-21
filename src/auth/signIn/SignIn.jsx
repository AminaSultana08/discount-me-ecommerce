import { BsEye } from "react-icons/bs";
import signin from "../../assets/signin.jpg";
import "./style.css";
import { Link } from "react-router-dom";

const SignIn = () => {
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
            Sign In
          </h1>

          <div className=" grid-cols-1 grid gap-3 mx-auto rounded-sm ">
            <input
              type="email"
              placeholder="Email"
              name="Email"
              className=" border-black border p-2 rounded-lg"
              required
            />

            <div className="flex items-center">
              <input
                type="password"
                placeholder="Password"
                name="password"
                className=" border-black rounded-lg border py-2 pl-2 pr-0 flex-1 "
                required
              />
              <BsEye className="-ml-8  " />
            </div>

            <div className=" flex justify-between">
              <label>
                <input type="checkbox" checked="" name="remember" /> Remember me
              </label>
              <span className="psw">
                Forgot <a href="#">password?</a>
              </span>
            </div>
            <button type="submit" className="btn ">
              Login
            </button>
          </div>
        </form>
        <h1 className="text-center mt-5">
          Don’t have account?{" "}
          <Link to="/register" className="font-semibold">
            Register
          </Link>{" "}
        </h1>
      </div>
    </div>
  );
};

export default SignIn;
