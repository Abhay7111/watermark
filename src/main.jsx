import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './CopyrightComponents/Footer';
import Hero from './Pages/Hero';

const routers = createBrowserRouter([
  {path:'/', element:<Hero/>,}
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>,
)
