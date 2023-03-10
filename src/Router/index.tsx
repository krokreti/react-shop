import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ProductDetailCard from '../components/ProductDetailCard'
import CategoryList from '../pages/categories/CategoryList'
import CategoryDetail from '../pages/categories/CategoryDetail'
import Error from '../pages/error/Error'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import ProductList from '../pages/products/ProductList'
import Signup from '../pages/signup/Signup'
import Cart from '../pages/cart/Cart'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,
      children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: 'products',
            element: <ProductList/>
        },
        {
          path: 'product-detail/:id',
          element: <ProductDetailCard/>
        },
        {
          path: 'category',
          element: <CategoryList/>,
        },
        {
          path: 'category/:idCategory',
          element: <CategoryDetail/>
        },
        {
          path: 'cart',
          element: <Cart/>
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

