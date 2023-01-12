import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { useAppSelector } from '../hooks/redux-hooks'
import Error from '../pages/error/Error'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,
      children: [
        {
            path: 'home',
            element: <Home />,
        }
      ]
    },
    {
        path: "login",
        element: <Login />
    },
    {
      path: "signup",
      element: <Signup />
    },
    {
      path: "*",
      element: <Error />
    }
  ])

