import { Children } from "react";
import Home from "../pages/Homepage.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";
import Header from "./Header.tsx";
import Pedidos from "../pages/Pedidos.tsx";

import { createBrowserRouter, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-red-500">
      <Header />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
