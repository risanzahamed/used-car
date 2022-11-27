import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../CarDashboard/AddProduct/AddProduct";
import AllCustomer from "../CarDashboard/AllCustomer/AllCustomer";
import AllUsers from "../CarDashboard/AllUsers/AllUsers";
import CarDashboardData from "../CarDashboard/CarDashboardData/CarDashboardData";
import FlagedItemData from "../CarDashboard/FlagedItemData/FlagedItemData";
import FlagIteams from "../CarDashboard/FlagIteams/FlagIteams";
import MyBooking from "../CarDashboard/MyBooking/MyBooking";
import MyProduct from "../CarDashboard/MyProduct/MyProduct";
import Payment from "../CarDashboard/Payment/Payment";
import SellerMyProduct from "../CarDashboard/AllSeller/AllSeller";
import CarDashboardLayout from "../CarDashboardLayout/CarDashboardLayout";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import CategoryCar from "../Pages/CategoryCar/CategoryCar";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import OurCars from "../Pages/OurCars/OurCars";
import AdminRoute from "../Routes/AdminRoute";
import PrivateRoutes from "../Routes/PrivateRoutes";
import SellerRoute from "../Routes/SellerRoute";
import Login from "../Shared/Authentications/Login/Login";
import Register from "../Shared/Authentications/Register/Register";
import Root from "./Root/Root";
import AllSeller from "../CarDashboard/AllSeller/AllSeller";

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
        loader: ({ params }) => fetch(`https://used-car-website-server.vercel.app/category/${params.id}`)
      },
      {
        path: "/category/:id",
        element: <PrivateRoutes><CategoryCar /></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://used-car-website-server.vercel.app/category/${params.id}`)

      },
      {
        path: "/our-cars",
        element: <OurCars />,
        loader: async () => fetch('https://used-car-website-server.vercel.app/car-details/')

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
        path:'/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`https://used-car-website-server.vercel.app/booking/${params.id}`)
      },
      {
        path:'/dashboard/add-product',
        element: <SellerRoute><AddProduct/></SellerRoute>
      },
      {
        path:'/dashboard/my-product',
        element: <MyProduct/>
      },
      {
        path: '/dashboard/user/customer',
        element:<AllCustomer></AllCustomer>,
        loader: ()=>fetch('https://used-car-website-server.vercel.app/user/customer')
      },
      {
        path: '/dashboard/user/seller',
        element: <AllSeller></AllSeller>,
        loader: ()=>fetch('https://used-car-website-server.vercel.app/user/seller')
      }
    ]
  }
]);

export default router