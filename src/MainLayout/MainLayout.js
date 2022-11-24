import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import CategoryCar from "../Pages/CategoryCar/CategoryCar";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import OurCars from "../Pages/OurCars/OurCars";
import Login from "../Shared/Authentications/Login/Login";
import Register from "../Shared/Authentications/Register/Register";
import Root from "./Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/category/:id",
        element: <CategoryCar />,
        loader: async({params}) => fetch(`http://localhost:8000/car-details/${params._id}`)
        
      },
      {
        path: "/our-cars",
        element: <OurCars />,
        loader: async () =>  fetch('CarItems.json') 
      
      },
     
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ],
  },
]);

export default router