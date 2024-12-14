
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/homePage';
import Root from '../layouts/root';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
        path:'/',
        element: <HomePage/>
      }]
    },
  ]);

export default router;