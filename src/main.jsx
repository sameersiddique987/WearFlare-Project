import { createRoot } from 'react-dom/client'
import './index.css'
import 'swiper/css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WinterCollection from './Pages/WinterCollection.jsx'
import Home from './Pages/Home.jsx'
import SummerCollection from './Pages/SummerCollection.jsx'
import SingleUser from './Pages/SingleUser.jsx'
import Layout from './Layout.jsx'
import AddToCart from './Pages/AddToCart.jsx'
import Success from './Pages/Success.jsx'
import Cancel from './Pages/Cancel.jsx'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/SignUp.jsx'
import ProtectedRoutes from './component/ProtectedRoutes.jsx'
import NewArrivals from './Pages/NewArrivals.jsx';




const router = createBrowserRouter([
{
  path:"/",
  element:<Layout />,
  children:[
    {
      path:"/",
      element:<Home />
    },
    {
      path:"Login",
      element:<Login />
    },
    {
      path:"SignUp",
      element:<SignUp />
    },
    {
      path:"SummerCollection",
      element:<SummerCollection />
    },
    {
      path:"newarrivals",
      element:<NewArrivals />
    },
  
    {
      path:"WinterCollection",
      element:<WinterCollection />
    },
    {
      path:"AddToCart",
      element: <ProtectedRoutes component={<AddToCart/>}/>
      
    },
    {
      path:"success",
      element:<Success />
    },
    {
      path:"cancel",
      element:<Cancel />
    },
 
    {
      path:"/SingleUser/:id",
      element:<SingleUser />
    },
    {
      path:"*",
      element: <h1>NOT FOUND</h1>
    }
  ]
}
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>  
)
