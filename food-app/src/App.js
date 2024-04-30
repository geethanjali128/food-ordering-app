
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Outlet} from 'react-router-dom';
import {Provider} from 'react-redux';
import appStore from './store/appStore'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const App=()=>{

 

return(
        <Provider store={appStore}>
         <ToastContainer/>  
        <div>
          <Header/>
          <Outlet/>
          <Footer/>
            </div>
        </Provider>
    )
}


export default App;





