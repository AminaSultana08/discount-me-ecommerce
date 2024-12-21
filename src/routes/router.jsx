import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/homePage";
import Root from "../layouts/root";
import AllCategories from "../pages/AllCategories/AllCategories";
import Support from "../pages/Support/Support";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/About Us/AboutUs";
import SignIn from "../Auth/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/allCategories",
        element: <AllCategories />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
