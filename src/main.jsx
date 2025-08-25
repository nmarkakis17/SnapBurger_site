import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Rewards from './pages/Rewards.jsx'
import Merch from './pages/Merch.jsx'
import SnapBoard from './pages/SnapBoard.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu /> },
      { path: '/rewards', element: <Rewards /> },
      { path: '/merch', element: <Merch /> },
      { path: '/snapboard', element: <SnapBoard /> },
      { path: '/about', element: <About /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
