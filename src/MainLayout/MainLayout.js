import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../CarDashboard/AddProduct/AddProduct";
import AllUsers from "../CarDashboard/AllUsers/AllUsers";
import CarDashboardData from "../CarDashboard/CarDashboardData/CarDashboardData";
import FlagedItemData from "../CarDashboard/FlagedItemData/FlagedItemData";
import FlagIteams from "../CarDashboard/FlagIteams/FlagIteams";
import MyBooking from "../CarDashboard/MyBooking/MyBooking";
import MyProduct from "../CarDashboard/MyProduct/MyProduct";
import Payment from "../CarDashboard/Payment/Payment";
import SellerMyProduct from "../CarDashboard/SellerMyProduct/SellerMyProduct";
import CarDashboardLayout from "../CarDashboardLayout/CarDashboardLayout";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import CategoryCar from "../Pages/CategoryCar/CategoryCar";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import OurCars from "../Pages/OurCars/OurCars";
import AdminRoute from "../Routes/AdminRoute";
import PrivateRoutes from "../Routes/PrivateRoutes";
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
        loader: ({ params }) => fetch(`http://localhost:8000/category/${params.id}`)
      },
      {
        path: "/category/:id",
        element: <PrivateRoutes><CategoryCar /></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:8000/category/${params.id}`)

      },
      {
        path: "/our-cars",
        element: <OurCars />,
        loader: async () => fetch('http://localhost:8000/car-details/')

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

  {
    path: '/dashboard',
    element: <PrivateRoutes><CarDashboardLayout/></PrivateRoutes>,
    children: [
      {
        path:'/dashboard',
        element: <MyBooking/>
      },
      {
        path:'/dashboard/flags',
        element: <AdminRoute><FlagIteams/></AdminRoute>
      },
      {
        path:'/dashboard/flaged',
        element: <AdminRoute><FlagedItemData/></AdminRoute>,
      },
      {
        path:'/dashboard/allusers',
        element: <AdminRoute><AllUsers/></AdminRoute>,
      },
      {
        path:'/dashboard/seller',
        element: <SellerMyProduct></SellerMyProduct>,
      },
      {
        path:'/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`http://localhost:8000/booking/${params.id}`)
      },
      {
        path:'/dashboard/add-product',
        element: <AddProduct/>
      },
      {
        path:'/dashboard/my-product',
        element: <MyProduct/>
      }
    ]
  }
]);

export default router