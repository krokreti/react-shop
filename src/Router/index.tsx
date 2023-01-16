import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ProductDetail from '../components/ProductDetail'
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
        },
        {
          path: 'product-detail/:id',
          element: <ProductDetail/>
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

