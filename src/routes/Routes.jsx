import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Books/Books";


export const router = createBrowserRouter
([
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
  ],

  errorElement: <div>
    <h1 className="text-3xl text-red-500">404 - Page Not Found</h1>
  </div>
}


]);