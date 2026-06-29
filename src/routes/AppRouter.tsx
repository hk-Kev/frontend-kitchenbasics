import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // This makes Home load on the default '/' path
        element: <Home />,
      },
      {
        path: "products",
        element: <div>Products Page Placeholder</div>,
      },
      {
        path: "products/:id",
        element: <div>Product Details Placeholder</div>,
      },
      {
        path: "cart",
        element: <div>Cart Page Placeholder</div>,
      },
      {
        path: "checkout",
        element: <div>Checkout Page Placeholder</div>,
      },
      {
        path: "login",
        element: <div>Login Page Placeholder</div>,
      },
      {
        path: "register",
        element: <div>Register Page Placeholder</div>,
      },
      {
        path: "dashboard",
        element: <div>Dashboard Page Placeholder</div>,
      },
    ],
  },
]);
