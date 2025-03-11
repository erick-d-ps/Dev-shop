import { createBrowserRouter } from 'react-router-dom'

import { Home } from "./pages/Home";
import { Cart } from "./pages/cart";
import { Layout } from './components/layout';
import { Description } from './pages/description';
import { Notfound } from './pages/notfound';


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/description/id",
        element: <Description/>
      },
      {
        path: "*",
        element: <Notfound/>
      }
    ]
    
  }
])

export { router };