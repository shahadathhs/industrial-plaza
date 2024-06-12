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
// import EstateDetails from './components/EstateDetails/EstateDetails';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProviders from './Providers/AuthProviders';
import PrivateRoutes from './Routes/PrivateRoutes';
import UserProfile from './pages/UserProfile/UserProfile';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';
import EstateDetails from './pages/EstateDetails/EstateDetails';
import ThemeProvider from './Providers/ThemeProvider';

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
        element: <PrivateRoutes><Testimonials></Testimonials></PrivateRoutes>,
        loader: () => fetch('/Review.json'),
      },
      {
        path: '/estate/:id',
        element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
        loader: () => fetch('/Estate.json'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/userProfile',
        element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>,
      },
      {
        path: '/updateProfile',
        element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProviders>
  </React.StrictMode>,
)
