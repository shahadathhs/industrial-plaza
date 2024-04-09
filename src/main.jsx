import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import FAQs from './pages/FAQs/FAQs';
import Testimonials from './pages/Testimonials/Testimonials';
import EstateDetails from './components/EstateDetails/EstateDetails';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProviders from './Providers/AuthProviders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Estate.json'),
      },
      {
        path: '/faqs',
        element: <FAQs></FAQs>,
      },
      {
        path: '/testimonials',
        element: <Testimonials></Testimonials>,
        loader: () => fetch('/Review.json'),
      },
      {
        path: '/estate/:id',
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch('/Estate.json'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
