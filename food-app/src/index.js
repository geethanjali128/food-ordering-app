import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Body from './components/body/Body';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ResMenu from './components/restaurantmenu/ResMenu';
import Cart from './components/cart/Cart';
import Login from './components/login/Login';
import Error from './components/error/Error';


  const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
        path:'/',
        element:<Body/>,
       
        },  
             {
        path:'/about',
        element:<About/>,
       
        },
         {
        path:'/contact',
        element:<Contact/>,
       },
        {
        path:'/restaurants/:resId',
        element:<ResMenu/>,
       },
        {
        path:'/cart',
        element:<Cart/>,
       }, 
        {
        path:'/login',
        element:<Login/>,
       
        },

        ],
       errorElement:<Error/>
    }
   
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
