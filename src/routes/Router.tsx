import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllProducts from "../pages/Products/AllProducts";
import ProductsDetails from "../pages/Products/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../pages/CheckOut/Checkout";
import Main from "../lib/Layout/Main";
import Dashboard from "../lib/Layout/Dashboard";
import CustomerHome from "../pages/DashBoard/CustomerDashboard/CustomerHome";
import AdminPrivateRoute from "./AdminPrivateRoute";
import AdminHome from "../pages/DashBoard/Admin/AdminHome/AdminHome";
import CustomerProfile from "../pages/DashBoard/CustomerDashboard/CustomerProfile";
import GetAllProductBYAdmin from "../pages/DashBoard/Admin/AddProduct/GetAllProductBYAdmin";
import AddProduct from "../pages/DashBoard/Admin/AddProduct/AddProduct";
import ProductsUpdated from "../pages/DashBoard/Admin/AddProduct/ProductsUpdated";
import AdminProfile from "../pages/DashBoard/Admin/AdminHome/AdminProfile";
import AllUsers from "../pages/DashBoard/Admin/AdminHome/AllUsers";
import AdminOrderDetailes from "../pages/DashBoard/Admin/Order/AdminOrderDetails";
import OrderConfirm from "../components/ui/OrderConfirm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allProduct",
        element: <AllProducts />,
      },
      {
        path: "/product/:id",
        element: <ProductsDetails />,
      },
      {
        path: '/checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>
      },
      {
        path: '/orderConfirm',
        element: <PrivateRoute><OrderConfirm /></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Register />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    //     element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,

    children: [
      // normal user routers 
      {
        path: 'userHome',
        element: 
        <PrivateRoute>
        <CustomerHome />
        </PrivateRoute>
      },
      {
        path: 'profile',
        element:
        <PrivateRoute>
          <CustomerProfile />
        </PrivateRoute> 
      },


      // admin only routes 
      {
        path: 'adminHome',
        element: <AdminPrivateRoute><AdminHome /></AdminPrivateRoute>
      },
      {
        path: 'allUser',
        element: <AdminPrivateRoute><AllUsers /></AdminPrivateRoute>
      },
      {
        path: 'getAllProductByAdmin',
        element: <AdminPrivateRoute><GetAllProductBYAdmin /></AdminPrivateRoute>
      },
      {
        path: 'addProduct',
        element: <AdminPrivateRoute><AddProduct /></AdminPrivateRoute>
      },
      {
        path: 'update-product/:id',
        element: <AdminPrivateRoute><ProductsUpdated /></AdminPrivateRoute>
      },
      {
        path: 'adminProfile',
        element: <AdminPrivateRoute><AdminProfile /></AdminPrivateRoute>
      },
      {
        path: 'adminOrderDeltas',
        element: <AdminPrivateRoute><AdminOrderDetailes /></AdminPrivateRoute>
      },

    ]
  }
]);

export default router;
