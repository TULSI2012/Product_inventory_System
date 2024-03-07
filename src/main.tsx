import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";
import Favorites from "./Pages/Favorites";

const router = createBrowserRouter({
  routes: [
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/product",
      element: <AddProduct />,
    },
    {
      path: "/product/:id",
      element: <EditProduct />,
    },
    {
      path: "/favourites",
      element: <Favorites />,
    },
  ],
});

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
