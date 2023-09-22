
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from "./pages/Cart.jsx"
// import CartProvider from './CartProvider';


import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import { productsData } from './api/Api';
import SingleProduct from './components/SingleProduct';
import Login from './pages/Login';



const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ScrollRestoration/>
      <Footer/>
    </div>
  )
}





const router  = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:productsData,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/product/:id",
        element:<SingleProduct/>,
      },
      {
        path:"/login",
        element:<Login/>,
      },
    ],
  },
])

function App() {
  return (
    <>
      <div className='font-bodyFont'>

      <RouterProvider router={router}/>
      </div>
    </>
  );
}

export default App;
