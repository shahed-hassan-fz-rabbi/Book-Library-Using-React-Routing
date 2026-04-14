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
import { router } from './routes/Routes.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
