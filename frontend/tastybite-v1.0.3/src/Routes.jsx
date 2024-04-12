import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "pages/NotFound";
import Menu from "pages/Menu";
import Aboutus from "pages/Aboutus";
import Contact from "pages/Contact";

import Homepage from "pages/Homepage";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Cart from "pages/Cart";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "*", element: <NotFound /> },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "aboutus",
      element: <Aboutus />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
