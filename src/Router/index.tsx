import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Error from '../pages/error/Error'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,
      children: [
        {
            path: 'home',
            element: <Home />
        },
      ]
    },
    {
        path: "login",
        element: <Login/>
    }
  ])

