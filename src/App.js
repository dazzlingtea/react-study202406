import React from 'react';
import Home from "./components/RouteExample/pages/Home";
import {createBrowserRouter, json, RouterProvider} from "react-router-dom";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
import Events, { loader as eventListLoader } from "./components/RouteExample/pages/Events";
import EventDetail, {loader as eventDetailLoader, action as deleteAction} from "./components/RouteExample/pages/EventDetail";
import EventLayout from "./components/RouteExample/layout/EventLayout";
import NewEvent from "./components/RouteExample/pages/NewEvent";
import EditPage from "./components/RouteExample/pages/EditPage";
import {action as manipulateAction} from "./components/RouteExample/components/EventForm"

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          {
            index:true,
            element: <Events />,
            // loader: eventListLoader,

          },
          {
            path: ':eventId',
            // loader가 children에게 직접적으로 연결되지 않아
            // EventDetail에서 loader를 사용하지 못하고 있음.
            // element: <EventDetail />,
            loader: eventDetailLoader,
            id: 'event-detail', // loader에게 ID 부여
            children: [
              { index:true,
                element: <EventDetail />,
                action: deleteAction
              },
              { path: 'edit',
                element: <EditPage />,
                action: manipulateAction
              },
            ]
          },
          {
            path: 'new',
            element: <NewEvent />,
            // 서버에 갱신데이터 요청을 보낼 때 트리거
            action: manipulateAction
          },
        ]
      },
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

