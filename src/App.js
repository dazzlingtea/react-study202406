import React from 'react';
import Home from "./components/RouteExample/pages/Home";
import Products from "./components/RouteExample/pages/Products";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> }
]);

const App = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;

