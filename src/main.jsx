import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import ErrorPage from './error-page';
import Home from './components/Home/Home';
import Chef from './components/Chef/Chef';
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
        element: <Chef></Chef>,
        loader: ({ params }) =>
          fetch(`https://server-mksmmirhs.vercel.app/data/${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
