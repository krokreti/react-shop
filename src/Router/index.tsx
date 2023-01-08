import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Error from '../pages/error/Error'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>
    }
  ])

