import React, { useEffect } from 'react'
import CartListItems from './CartListItems'

import {useDispatch,useSelector} from 'react-redux'
import { clearCart, getTotal } from '../../store/cartSlice'
import { Link } from 'react-router-dom'


const Cart = () => {
    const cartItems=useSelector( store => store.cart.cartItems)
   

    const dispatch=useDispatch()

  // useEffect dispatches getTotal action whenever cartItems are changed
    useEffect(()=>{
      dispatch(getTotal())
    },[cartItems])

    
    const handleClearCart=()=>{
        dispatch(clearCart())
    }


  return (
    <div className='mb-56'>
        <div className='text-center  font-bold  mx-auto '>
      <h1 className='my-5  text-2xl '>Cart</h1>
    <button   className='bg-green-400 px-2 rounded-lg shadow-x  text-white'  onClick={handleClearCart} >Clear Cart</button>
    </div>
      <div className='mt-2 mx-auto w-6/12'>
            {cartItems.length===0?
            (
            <div><h3 className='mx-auto text-center font-bold mt-14 text-2xl text-gray-500'>Your Cart is Empty</h3>
            <button className='mx-auto text-center  mt-14 text-xl font-medium bg-gray-200 px-3 py-1 rounded-sm ml-24'><Link to='/'> Quickly add your favorite food items into  cart.....</Link></button></div>)
            :(<CartListItems listItems={cartItems}  />)}
        
      </div>
    </div>
  )
}

export default Cart
