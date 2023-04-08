import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Articles from './components/Articles/Articles';
import Movies from './components/Movies/Movies';
import Movie from './components/Movie/Movie';

import './style.css';

const App = () => {
  return (
    <div className="container">
      <header>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path:'/',
    errorElement: <ErrorPage/>,
    element: <App/>,
    children: [
      {
        path:'/',
        errorElement: <ErrorPage/>,
        element: <Home/>
      },
      {
        path:'/reviews',
        errorElement: <ErrorPage/>,
        element: <Reviews/>
      },
      {
        path:'/articles',
        errorElement: <ErrorPage/>,
        element: <Articles/>
      },
      {
        path:'/movies',
        errorElement: <ErrorPage/>,
        element: <Movies/>,
        children: [
          {
            path:':id',
            errorElement: <ErrorPage/>,
            element: <Movie/>
          },
        ]
      },
      
    ]
  },
])

createRoot(
  document.querySelector('#app'),
).render(
<RouterProvider router={router} />
);
