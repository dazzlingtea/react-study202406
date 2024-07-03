import React from 'react';
import Home from "./components/RouteExample/pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
import Events from "./components/RouteExample/pages/Events";
import EventDetail from "./components/RouteExample/pages/EventDetail";

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { path: '', element: <Home /> },
      { index: true, element: <Home /> },
      { path: 'events', element: <Events /> },
      { path: 'events/:eventId', element: <EventDetail /> }
    // 메뉴에 따라 path 추가하면 됨
    ]
  },

]);

const App = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;

