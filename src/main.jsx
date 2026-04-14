import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React routing setup

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './Layout/MainLayout.jsx';
import Homepage from './pages/Homepage/Homepage.jsx';
import Books from './pages/Books/Books.jsx';


const router = createBrowserRouter([
{
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Homepage />

    },
    {
      path: "/books",
      element : <Books />

    }
  ]
}


]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
