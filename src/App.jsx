import React from 'react'
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/Layouts/MainLayout'
import Home from './pages/Home'
import FetchOld from './pages/FetchOld'
import FetchRQ from './pages/FetchRQ'


//create router 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
    ]
  }
])
const App = () => {
  return <RouterProvider router={router} ></RouterProvider>
};

export default App