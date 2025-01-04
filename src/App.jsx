import React from 'react'
import { createBrowserRouter } from 'react-router-dom'


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
  return (
    <div>React Query</div>
  )
}

export default App