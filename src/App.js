import React from 'react';
import Home from "./components/RouteExample/pages/Home";
import Products from "./components/RouteExample/pages/Products";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
import ProductDetail from "./components/RouteExample/pages/ProductDetail";

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { path: '', element: <Home /> },
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:prodId/page/:pageNo', element: <ProductDetail /> }
    // 메뉴에 따라 paht 추가하면 됨
    ]
  },

]);

const App = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;

