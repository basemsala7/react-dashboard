import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import { QueryClientProvider, QueryClient } from "react-query";
import Users from "./pages/users/Users";
import SingleUser from "./pages/singleUser/SingleUser";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import Cookies from "js-cookie";

const queryClient = new QueryClient();
const token = Cookies.get("token") || null || undefined;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/users/:id",
        element: <SingleUser />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
