import React, {useState} from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './page/Layout';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import PrivateRoute from './route/PrivateRoute';

function App() {

  const [authenticate, setAuthenticate] = useState(false)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout authenticate={authenticate}/>,
      children:[
        {
          path:'/',
          element:<ProductAll/>
        },
        {
          path:'product/:id',
          element:<PrivateRoute authenticate={authenticate}/>
        }
      ]
    },
    {
      path:'/login',
      element:<Login setAuthenticate={setAuthenticate}/>
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
