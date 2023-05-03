import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import ErrorPage from './error-page';
import Home from './components/Home/Home';
import Chef from './components/Chef/Chef';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './PrivetRoute/PrivateRoute';
import Blog from './Blog/Blog';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://server-mksmmirhs.vercel.app/data'),
      },
      {
        path: '/chef/:id',
        element: (
          <PrivateRoute>
            <Chef></Chef>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-mksmmirhs.vercel.app/data/${params.id}`),
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
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
